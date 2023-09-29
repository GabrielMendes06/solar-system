import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

function Badges() {
  return (
    <div className='align-self-end'>
        <Stack direction="horizontal" gap={2}>
          <Badge bg="primary">Primary</Badge>
          <Badge bg="secondary">Secondary</Badge>
          <Badge bg="success">Success</Badge>
          <Badge bg="danger">Danger</Badge>
          <Badge bg="warning" text="dark">
            Warning
          </Badge>
          <Badge bg="info">Info</Badge>
          <Badge bg="light" text="dark">
            Light
          </Badge>
          <Badge bg="dark">Dark</Badge>
        </Stack>
    </div>
  );
}

export default Badges;