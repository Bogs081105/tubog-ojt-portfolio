import { Background, Card, Column, Heading, Line, Row, SmartLink, Tag, Text } from "@once-ui-system/core";
import { work, person } from "@/resources";

export const metadata = {
  title: work.title,
  description: work.description,
};

// 👉 Each document now holds a LIST of files.
// To add one: push a new { label, file } into its "files" array.
// Leave "files: []" empty until you have something to upload.
const sections = [
  {
    title: "Before OJT Requirements",
    accent: "brand-alpha-strong",
    documents: [
      { name: "Cover Page", files: [] },
      { name: "Approval Sheet", files: [] },
      { name: "Company Profile", files: [] },
      { name: "Memorandum of Agreement", files: [] },
      {
        name: "Letter of Intent",
        files: [{ label: "View", file: "/documents/before-ojt/tubog-letter-of-intent.pdf" }],
      },
      {
        name: "Letter of Endorsement",
        files: [{ label: "View", file: "/documents/before-ojt/tubog-letter-of-endorsement.pdf" }],
      },
      { name: "Student Waiver", files: [] },
      { name: "Internship Agreement", files: [] },
      { name: "Consent Form", files: [] },
      { name: "CV", files: [] },
      { name: "Insurance", files: [] },
      { name: "Medical Certificate", files: [] },
    ],
  },
  {
    title: "During OJT Requirements",
    accent: "accent-alpha-strong",
    documents: [
      {
        name: "Weekly Documentation",
        files: [
          { label: "Week 1", file: "/documents/during-ojt/tubog-weekly-documentation-1.pdf" },
          // Add more like this as weeks go by:
          // { label: "Week 2", file: "/documents/during-ojt/tubog-weekly-documentation-2.pdf" },
        ],
      },
      {
        name: "Weekly Report",
        files: [
          { label: "Week 1", file: "/documents/during-ojt/week-1-report-tubog.pdf" },
          // { label: "Week 2", file: "/documents/during-ojt/week-2-report-tubog.pdf" },
        ],
      },
    ],
  },
  {
    title: "After OJT Requirements",
    accent: "neutral-alpha-strong",
    documents: [
      { name: "Evaluation for Supervisor", files: [] },
      { name: "Performance Evaluation Grading", files: [] },
    ],
  },
] as const;

export default function Documents() {
  return (
    <Column maxWidth="m" fillWidth gap="48" paddingY="24">
      <Background mask={{ x: 50, y: 0, radius: 100 }} position="absolute" />

      <Column gap="12">
        <Heading variant="display-strong-xs">OJT Documents</Heading>
        <Text onBackground="neutral-weak" wrap="balance">
          A complete record of {person.name}&apos;s On-the-Job Training
          requirements — organized by phase, updated as the internship
          progresses. Click any available document to view it.
        </Text>
      </Column>

      {sections.map((section) => {
        const uploadedCount = section.documents.filter((d) => d.files.length > 0).length;

        return (
          <Column key={section.title} fillWidth gap="16">
            <Row gap="12" vertical="center">
              <Line background={section.accent} vert height="20" />
              <Heading as="h2" variant="heading-strong-l">
                {section.title}
              </Heading>
              <Tag size="s" variant="neutral">
                {uploadedCount}/{section.documents.length} uploaded
              </Tag>
            </Row>

            <Column fillWidth gap="8">
              {section.documents.map((doc) => (
                <Card
                  key={doc.name}
                  fillWidth
                  radius="l"
                  border="neutral-alpha-weak"
                  background="surface"
                  padding="16"
                >
                  <Column fillWidth gap="12">
                    <Row fillWidth horizontal="between" vertical="center" gap="12">
                      <Text variant="body-default-m">{doc.name}</Text>
                      {doc.files.length === 0 && (
                        <Tag size="s" variant="neutral">
                          Pending upload
                        </Tag>
                      )}
                    </Row>

                    {doc.files.length > 0 && (
                      <Row fillWidth gap="8" wrap>
                        {doc.files.map((f) => (
                          <SmartLink key={f.file} href={f.file} target="_blank">
                            <Tag size="s" variant="brand">
                              {f.label}
                            </Tag>
                          </SmartLink>
                        ))}
                      </Row>
                    )}
                  </Column>
                </Card>
              ))}
            </Column>
          </Column>
        );
      })}
    </Column>
  );
}
