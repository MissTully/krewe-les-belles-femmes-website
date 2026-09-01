import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Ornament from "../components/Ornament";
import {
  daysInMonth,
  eventTouchesDay,
  eventsInMonth,
  firstWeekday,
  kindLabel,
  audienceLabel,
  certaintyLabel,
  monthTitle,
  sortEvents,
  splitIsoDate,
  uniqueMonths,
} from "../calendar";
import { events, type EventAudience, type KreweEvent } from "../content";
import "../calendar.css";

type Filter = "all" | EventAudience;

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function Calendar() {
  const months = uniqueMonths(events);
  const [monthKey, setMonthKey] = useState(months[0] ?? "2026-11");
  const [filter, setFilter] = useState<Filter>("all");

  const visible = useMemo(() => {
    const next = filter === "all" ? events : events.filter((event) => event.audience === filter);
    return sortEvents(next);
  }, [filter]);

  const { year, month } = splitIsoDate(`${monthKey}-01`);
  const monthEvents = eventsInMonth(visible, year, month);
  const grid = buildGrid(year, month);

  return (
    <article className="page wrap">
      <p className="eyebrow">25th year</p>
      <h1>The Season</h1>
      <Ornament />
      <div className="prose" style={{ marginTop: "1.25rem" }}>
        <p>
          The public program for the anniversary year. Confirmed city parade days sit next to
          krewe nights that still need a chair to lock the clock. Member-only rooms do not list
          a street address here.
        </p>
      </div>

      <div className="cal-toolbar" role="group" aria-label="Who the listing is for">
        <FilterButton current={filter} value="all" onPick={setFilter}>
          All listings
        </FilterButton>
        <FilterButton current={filter} value="public" onPick={setFilter}>
          Public
        </FilterButton>
        <FilterButton current={filter} value="invite" onPick={setFilter}>
          Invitation
        </FilterButton>
        <FilterButton current={filter} value="members" onPick={setFilter}>
          Members
        </FilterButton>
      </div>

      <div className="cal-layout">
        <section className="panel cal-month" aria-label="Month grid">
          <div className="cal-month-head">
            <button
              type="button"
              className="cal-nav-btn"
              onClick={() => shiftMonth(months, monthKey, -1, setMonthKey)}
              disabled={months.indexOf(monthKey) <= 0}
            >
              Previous
            </button>
            <h2>{monthTitle(`${monthKey}-01`)}</h2>
            <button
              type="button"
              className="cal-nav-btn"
              onClick={() => shiftMonth(months, monthKey, 1, setMonthKey)}
              disabled={months.indexOf(monthKey) >= months.length - 1}
            >
              Next
            </button>
          </div>
          <div className="cal-weekdays">
            {WEEKDAYS.map((day) => (
              <span key={day}>{day}</span>
            ))}
          </div>
          <div className="cal-grid">
            {grid.map((cell, index) => {
              if (!cell) {
                return <div key={`empty-${index}`} className="cal-cell empty" />;
              }
              const hits = monthEvents.filter((event) =>
                eventTouchesDay(event, year, month, cell),
              );
              return (
                <div
                  key={cell}
                  className={hits.length ? "cal-cell has-event" : "cal-cell"}
                >
                  <span className="cal-day">{cell}</span>
                  {hits.map((event) => (
                    <span key={event.id} className="cal-pip" title={event.title}>
                      {event.title}
                    </span>
                  ))}
                </div>
              );
            })}
          </div>
          <p className="fine-copy">
            Only nights with a set calendar day mark a square. Month-only items stay on the
            list to the side so we do not pretend we know the Saturday.
          </p>
        </section>

        <ol className="season-list cal-list">
          {monthEvents.length === 0 ? (
            <li>
              <p className="eyebrow">This month</p>
              <p>Nothing in this filter for {monthTitle(`${monthKey}-01`)}.</p>
            </li>
          ) : (
            monthEvents.map((event) => <EventRow key={event.id} event={event} />)
          )}
        </ol>
      </div>

      <section className="stack-gap">
        <p className="eyebrow">Full program</p>
        <h2 className="section-title">Every listing we can stand behind</h2>
        <ol className="season-list cal-full">
          {visible.map((event) => (
            <EventRow key={event.id} event={event} />
          ))}
        </ol>
      </section>
    </article>
  );
}

function EventRow({ event }: { event: KreweEvent }) {
  const heading = event.to ? <Link to={event.to}>{event.title}</Link> : <span>{event.title}</span>;
  return (
    <li>
      <p className="eyebrow">
        {event.whenLabel}
        {event.timeLabel ? ` · ${event.timeLabel}` : ""}
      </p>
      {heading}
      <p>{event.where}</p>
      <p className="cal-meta">
        {kindLabel(event.kind)} · {audienceLabel(event.audience)} · {certaintyLabel(event.certainty)}
      </p>
      {event.notes ? <p>{event.notes}</p> : null}
    </li>
  );
}

function FilterButton({
  current,
  value,
  onPick,
  children,
}: {
  current: Filter;
  value: Filter;
  onPick: (value: Filter) => void;
  children: string;
}) {
  const selected = current === value;
  return (
    <button
      type="button"
      className={selected ? "cal-filter is-on" : "cal-filter"}
      aria-pressed={selected}
      onClick={() => onPick(value)}
    >
      {children}
    </button>
  );
}

function buildGrid(year: number, month: number): Array<number | null> {
  const blanks = firstWeekday(year, month);
  const count = daysInMonth(year, month);
  const cells: Array<number | null> = [];
  for (let i = 0; i < blanks; i += 1) cells.push(null);
  for (let day = 1; day <= count; day += 1) cells.push(day);
  return cells;
}

function shiftMonth(
  months: string[],
  current: string,
  step: number,
  setMonth: (value: string) => void,
) {
  const index = months.indexOf(current);
  const next = months[index + step];
  if (next) setMonth(next);
}
