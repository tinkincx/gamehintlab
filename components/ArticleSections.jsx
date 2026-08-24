function StatusValue({ value }) {
  const progress = /not confirmed yet/i.test(value);
  const verified = value === "Verified";
  return <span className={progress ? "cell-status pending" : verified ? "cell-status verified" : ""}>{value}</span>;
}

export function ArticleSections({ sections, startIndex = 0 }) {
  return sections.map((section, localIndex) => {
    const index = startIndex + localIndex;
    return (
    <section className="article-section" id={`section-${index + 1}`} key={section.heading}>
      <div className="section-heading">
        <span>{String(index + 1).padStart(2, "0")}</span>
        <h2>{section.heading}</h2>
      </div>

      {section.type === "steps" ? (
        <ol className="steps-list">
          {section.items.map((item, itemIndex) => (
            <li key={typeof item === "string" ? item : item.title}>
              <span>{itemIndex + 1}</span>
              <p>{typeof item === "string" ? item : item.text}</p>
            </li>
          ))}
        </ol>
      ) : null}

      {section.type === "timeline" ? (
        <div className="timeline">
          {section.items.map((item) => (
            <div className="timeline-item" key={item.title}>
              <div className="timeline-dot" />
              <div><h3>{item.title}</h3><p>{item.text}</p></div>
            </div>
          ))}
        </div>
      ) : null}

      {section.type === "cards" ? (
        <div className="info-grid">
          {section.items.map((item) => (
            <article className="info-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      ) : null}

      {section.type === "table" ? (
        <div className="table-wrap">
          <table>
            <thead><tr>{section.columns.map((column) => <th key={column}>{column}</th>)}</tr></thead>
            <tbody>
              {section.rows.map((row, rowIndex) => (
                <tr key={`${row[0]}-${rowIndex}`}>
                  {row.map((cell, cellIndex) => <td key={`${cell}-${cellIndex}`}><StatusValue value={cell} /></td>)}
                </tr>
              ))}
            </tbody>
          </table>
          {section.note ? <p className="table-note">{section.note}</p> : null}
        </div>
      ) : null}

      {section.type === "checklist" ? (
        <ul className="check-list">
          {section.items.map((item) => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}
        </ul>
      ) : null}
    </section>
  );
  });
}
