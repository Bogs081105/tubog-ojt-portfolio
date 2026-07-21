import { Background, Card, Column, Heading, Line, Row, SmartLink, Tag, Text } from "@once-ui-system/core";
import { work, person } from "@/resources";

export const metadata = {
  title: work.title,
  description: work.description,
};

// 👇 This is the ONLY part you need to edit later.
// Set "file" to the path of the uploaded document once you have it,
// e.g. "/documents/cover-page.pdf" — leave it as null until then.
const sections = [
  {
    title: "Before OJT Requirements",
    accent: "brand-alpha-strong",
    documents: [
      { name: "Cover Page", file: null },
      { name: "Approval Sheet", file: null },
      { name: "Company Profile", file: null },
      { name: "Memorandum of Agreement", file: null },
      { name: "Letter of Intent", file: null },
      { name: "Letter of Endorsement", file: null },
      { name: "Student Waiver", file: null },
      { name: "Internship Agreement", file: null },
      { name: "Consent Form", file: null },
      { name: "CV", file: null },
      { name: "Insurance", file: null },
      { name: "Medical Certificate", file: null },
    ],
  },
  {
    title: "During OJT Requirements",
    accent: "accent-alpha-strong",
    documents: [
      { name: "Weekly Documentation", file: null },
      { name: "Weekly Report", file: null },
    ],
  },
  {
    title: "After OJT Requirements",
    accent: "neutral-alpha-strong",
    documents: [
      { name: "Evaluation for Supervisor", file: null },
      { name: "Performance Evaluation Grading", file: null },
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
          progresses.
        </Text>
      </Column>

      {sections.map((section) => (
        <Column key={section.title} fillWidth gap="16">
          <Row gap="12" vertical="center">
            <Line background={section.accent} vert height="20" />
            <Heading as="h2" variant="heading-strong-l">
              {section.title}
            </Heading>
            <Tag size="s" variant="neutral">
              {section.documents.length} items
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
                <Row fillWidth horizontal="space-between" vertical="center" gap="12">
                  <Text variant="body-default-m">{doc.name}</Text>
                  {doc.file ? (
                    <SmartLink href={doc.file}>
                      <Tag size="s" variant="brand">
                        Download
                      </Tag>
                    </SmartLink>
                  ) : (
                    <Tag size="s" variant="neutral">
                      Pending upload
                    </Tag>
                  )}
                </Row>
              </Card>
            ))}
          </Column>
        </Column>
      ))}
    </Column>
  );
}
