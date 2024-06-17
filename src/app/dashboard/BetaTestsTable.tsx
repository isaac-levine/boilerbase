import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const featureRequests = [
  {
    id: 1,
    title: "Add a new feature",
    status: "Pending",
    date: "10/10/2021",
  },
  {
    id: 2,
    title: "Add a new feature",
    status: "Pending",
    date: "10/10/2021",
  },
  {
    id: 3,
    title: "Add a new feature",
    status: "Pending",
    date: "10/10/2021",
  },
  {
    id: 4,
    title: "Add a new feature",
    status: "Pending",
    date: "10/10/2021",
  },
  {
    id: 5,
    title: "Add a new feature",
    status: "Pending",
    date: "10/10/2021",
  },
];

const BetaTestsTable = () => {
  return (
    <Card>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Request ID</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Title</TableHead>
            <TableHead className="text-right">Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {featureRequests.map((request) => (
            <TableRow key={request.id}>
              <TableCell className="font-medium">{request.id}</TableCell>
              <TableCell>{request.status}</TableCell>
              <TableCell>{request.title}</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default BetaTestsTable;
