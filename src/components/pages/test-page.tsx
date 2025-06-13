import Collapse from "../atoms/collapse";
import Page from "../layouts/page";
import Stack from "../layouts/stack";
import Title from "../atoms/title";

const TestPage = () => {
  return (
    <Page>
      <Stack>
        <Title title={"Test Page"} />
        <Collapse title="Test Collapse">
          <Stack>
            <Title title={"Collapse Section"} />
            <p>
              Amet reprehenderit nulla aliqua ipsum qui irure reprehenderit
              voluptate. Ex in deserunt laboris Lorem esse officia. Qui occaecat
              esse adipisicing qui nulla fugiat qui. Laboris velit anim pariatur
              quis est non Lorem cupidatat ullamco deserunt dolor commodo magna
              ullamco. Nisi officia irure est reprehenderit enim laborum.
            </p>
            <p>
              Dolore adipisicing culpa amet consectetur anim dolor ex quis sunt.
              Adipisicing consequat quis deserunt sit dolor tempor aliquip non
              fugiat reprehenderit. Deserunt et nostrud voluptate aute minim
              Lorem magna labore amet cillum cillum est enim.
            </p>
            <p>
              Duis in proident non amet ex deserunt labore minim culpa. Id
              eiusmod sit dolor in ex ipsum ullamco amet in ea est. Ex laboris
              mollit exercitation dolore. Deserunt est commodo magna magna ut
              ipsum exercitation et irure est quis quis. Sit laboris est
              pariatur enim labore proident ullamco aute. Nulla labore
              exercitation laboris velit minim mollit sit aliqua excepteur
              laboris.
            </p>
          </Stack>
        </Collapse>
        <Collapse title="Test Collapse">
          <p>This is a test collapse content.</p>
        </Collapse>
      </Stack>
    </Page>
  );
};

export default TestPage;
