"use client";

import { Card, Column, Heading, Row, Tag, Text } from "@once-ui-system/core";
import { useEffect, useState } from "react";

// Edit for changes
const START_DATE = "2026-07-20"; // First day of OJT
const TOTAL_HOURS = 240;
const HOURS_PER_WORKDAY = 9;

// Absents and changes/halfday
// Format: "YYYY-MM-DD": hoursActuallyWorked
const exceptions: Record<string, number> = {
  "2026-07-28": 0, // Absent
  "2026-07-31": 7, // Time in 10:00 AM, time out 5:00 PM
  "2026-08-06": 0, // Absent
  "2026-08-21": 0, // Absent
  "2026-08-25": 0, // Absent
  "2026-08-26": 0, // Absent
};

function countCompletedHours(): number {
  const start = new Date(START_DATE + "T00:00:00");
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  let hours = 0;
  const cursor = new Date(start);

  while (cursor <= today) {
    const day = cursor.getDay(); // 0 = Sunday, 6 = Saturday
    const isWeekday = day !== 0 && day !== 6;
    const isToday = cursor.getTime() === today.getTime();

    if (isWeekday && !isToday) {
      const key = cursor.toISOString().split("T")[0];
      hours += key in exceptions ? exceptions[key] : HOURS_PER_WORKDAY;
    }

    cursor.setDate(cursor.getDate() + 1);
  }

  return Math.min(hours, TOTAL_HOURS);
}

export function OjtProgress() {
  const [hoursCompleted, setHoursCompleted] = useState<number | null>(null);

  useEffect(() => {
    setHoursCompleted(countCompletedHours());
  }, []);

  if (hoursCompleted === null) {
    return null;
  }

  const percent = Math.min((hoursCompleted / TOTAL_HOURS) * 100, 100);
  const hoursRemaining = Math.max(TOTAL_HOURS - hoursCompleted, 0);

  return (
    <Card fillWidth radius="l" border="neutral-alpha-weak" background="surface" padding="24">
      <Column fillWidth gap="16">
        <Row fillWidth horizontal="between" vertical="center">
          <Heading as="h2" variant="heading-strong-l">
            OJT Progress
          </Heading>
          <Tag size="s" variant="brand">
            {percent.toFixed(1)}%
          </Tag>
        </Row>

        <div
          style={{
            width: "100%",
            height: "14px",
            borderRadius: "999px",
            background: "rgba(255,255,255,0.08)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: `${percent}%`,
              height: "100%",
              borderRadius: "999px",
              background: "linear-gradient(90deg, #6366f1, #22d3ee)",
              transition: "width 0.6s ease",
            }}
          />
        </div>

        <Row fillWidth horizontal="between">
          <Text onBackground="neutral-weak" variant="body-default-s">
            {hoursCompleted} / {TOTAL_HOURS} hours completed
          </Text>
          <Text onBackground="neutral-weak" variant="body-default-s">
            {hoursRemaining} hours remaining
          </Text>
        </Row>
      </Column>
    </Card>
  );
}
