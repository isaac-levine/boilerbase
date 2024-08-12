import {
  Body,
  Column,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import { main } from "./styles";

export const GenerationEmail = ({
  githubUsername,
  cliCommand,
}: {
  githubUsername: string;
  cliCommand: string;
}) => (
  <Html>
    <Head />
    <Preview>Customer {githubUsername} requested a Boilerplate!</Preview>
    <Tailwind>
      <Body style={main} className="py-8 text-[#1a1a1a]">
        <Container>
          <Section>
            <Row className="">
              <Column width={"24"} className="pr-2">
                <Img
                  src={`https://imagedelivery.net/PWe9rlYiKWdV4Gf-JnsgCw/faf4d104-cb3a-4669-e1f2-4b58f286fa00/2k`}
                  width="24"
                  height="24"
                  className="rounded-sm"
                  alt="Logo"
                />
              </Column>
              <Column className="w-fit">
                <Text className="font-semibold tracking-tight">
                  boilerbase.io
                </Text>
              </Column>
            </Row>
          </Section>
        </Container>
        <Container className="mx-auto">
          <Section className="">
            <Text className={"text-lg text-[#1a1a1a] font-semibold"}>
              Customer {githubUsername} requested a Boilerplate!
            </Text>
            <Text>Geneate the boilerplate using the following command:</Text>
            <hr />
            <Text className="font-light">{cliCommand}</Text>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);
