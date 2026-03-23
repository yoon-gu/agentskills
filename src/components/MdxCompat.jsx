import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";

export function Note({ children }) {
  return <div className="admonition admonition-note mdx-box">{children}</div>;
}

export function Tip({ children }) {
  return <div className="admonition admonition-tip mdx-box">{children}</div>;
}

export function Card({ title, href, children }) {
  const resolvedHref = href && href.startsWith("/") ? useBaseUrl(href) : href;

  return (
    <div className="mdx-card">
      {title ? <h3>{title}</h3> : null}
      <div>{children}</div>
      {resolvedHref ? (
        <p>
          <a href={resolvedHref}>바로가기</a>
        </p>
      ) : null}
    </div>
  );
}

export function CardGroup({ children }) {
  return <div className="mdx-card-group">{children}</div>;
}

export function Tabs({ children }) {
  return <div className="mdx-tabs">{children}</div>;
}

export function Tab({ title, children }) {
  return (
    <section className="mdx-tab">
      {title ? <h4>{title}</h4> : null}
      <div>{children}</div>
    </section>
  );
}
