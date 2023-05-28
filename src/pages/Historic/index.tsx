import { HistoricContainer, HistoricList, Status } from "./styles";

export function Historic() {
  return (
    <HistoricContainer>
      <h1>My historic</h1>

      <HistoricList>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Duration</th>
              <th>Start</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Task</td>
              <td>20 minutes</td>
              <td>2 months ago</td>
              <td><Status statusColor="green">Finished</Status></td>
            </tr>
            <tr>
              <td>Task</td>
              <td>20 minutes</td>
              <td>2 months ago</td>
              <td><Status statusColor="green">Finished</Status></td>
            </tr>
            <tr>
              <td>Task</td>
              <td>20 minutes</td>
              <td>2 months ago</td>
              <td><Status statusColor="green">Finished</Status></td>
            </tr>
          </tbody>
        </table>
      </HistoricList>
    </HistoricContainer>
  )
}