import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const route = pathname.replace(/^\/+|\/+$/g, "");
  const outputFile = route ? `${route}/index.html` : "index.html";
  return readFile(new URL(`../dist/client/${outputFile}`, import.meta.url), "utf8");
}

test("renders the finished UCLA BioKind homepage", async () => {
  const html = await render("/");
  assert.match(html, /UCLA BioKind Analytics/);
  assert.match(html, /Better data\./);
  assert.match(html, /Brighter outcomes\./);
  assert.match(html, /hero-grid-lines/);
  assert.match(html, /hero-stamp/);
  assert.match(html, /Healthcare × Analytics/);
  assert.match(html, /Our focus/);
  assert.match(html, /Los Angeles, CA/);
  assert.doesNotMatch(html, /Chapter focus/);
  assert.match(html, /biokind-logo-header\.png/);
  assert.match(html, /See how we help/);
  assert.match(html, /For UCLA students/);
  assert.match(html, /For healthcare nonprofits/);
  assert.doesNotMatch(html, /react-loading-skeleton/i);
});

test("renders every public route", async () => {
  const routes = [
    ["/about", /A student-run chapter at UCLA/],
    ["/members", /Meet the team/],
    ["/showcase", /Three common starting points/],
    ["/join", /Two ways to work with us/],
    ["/recruitment", /Recruitment timeline/],
  ];

  for (const [pathname, expectedCopy] of routes) {
    assert.match(await render(pathname), expectedCopy, pathname);
  }
});

test("derives the member year and counts from site data", async () => {
  const [html, membersPage, siteData] = await Promise.all([
    render("/members"),
    readFile(new URL("../app/members/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/site-data.ts", import.meta.url), "utf8"),
  ]);
  const visibleHtml = html.replaceAll("<!-- -->", "");
  const year = siteData.match(/export const memberYear = "([^"]+)"/)?.[1];
  const boardCount = siteData.match(/group: "Board"/g)?.length ?? 0;
  const generalCount =
    siteData.match(/group: "General members"/g)?.length ?? 0;

  assert.ok(year);
  assert.match(visibleHtml, new RegExp(`${year} team`));
  assert.match(
    visibleHtml,
    new RegExp(`${String(boardCount).padStart(2, "0")} members?`),
  );
  if (generalCount > 0) {
    assert.match(
      visibleHtml,
      new RegExp(`${String(generalCount).padStart(2, "0")} members?`),
    );
  } else {
    assert.doesNotMatch(visibleHtml, /View general members/);
  }
  assert.doesNotMatch(visibleHtml, /archive/i);
  assert.doesNotMatch(visibleHtml, /Current member with a roster update/i);
  assert.match(membersPage, /members\.length/);
  assert.match(membersPage, /board\.length/);
  assert.match(membersPage, /generalMembers\.length/);
});

test("offers clear student and nonprofit paths", async () => {
  const [joinHtml, recruitmentHtml] = await Promise.all([
    render("/join"),
    render("/recruitment"),
  ]);

  assert.match(joinHtml, /For UCLA students/);
  assert.match(joinHtml, /href="\/recruitment\/"/);
  assert.match(joinHtml, /For healthcare nonprofits/);
  assert.match(
    joinHtml,
    /mailto:uclachapter@biokind\.org\?subject=Nonprofit%20partnership%20inquiry/,
  );
  assert.match(recruitmentHtml, /Next cycle is in Fall 2026/);
  assert.match(recruitmentHtml, /Join the general interest mailing list/);
  assert.match(
    recruitmentHtml,
    /latest process and application link when the application cycle opens/,
  );
  assert.doesNotMatch(recruitmentHtml, /A simple path into the chapter/);
  assert.match(recruitmentHtml, /forms\.gle\/dWmbJksPTsv1jBVr9/);
  assert.match(recruitmentHtml, /Applications open/);
  assert.match(recruitmentHtml, /Decisions/);
  assert.doesNotMatch(recruitmentHtml, /09\/26|10\/4|10\/8|10\/11|2023/);
});

test("shows the team photo placeholder on the About page", async () => {
  const html = await render("/about");

  assert.match(html, /Image of UCLA BioKind together/);
  assert.match(html, /Image placeholder for UCLA BioKind together/);
});

test("includes required brand and social assets", async () => {
  await Promise.all([
    access(new URL("../public/images/biokind-logo.png", import.meta.url)),
    access(new URL("../public/images/biokind-logo-header.png", import.meta.url)),
    access(new URL("../public/images/team-working.jpg", import.meta.url)),
    access(new URL("../public/favicon.png", import.meta.url)),
  ]);
});
