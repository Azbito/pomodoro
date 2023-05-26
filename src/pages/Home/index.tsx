import { Play } from "phosphor-react";
import { CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountdownButton, TaskInput } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">I am going to be working on</label>
          <TaskInput placeholder="Give a name to your project" id="task" />

          <label htmlFor="minutesAmount">for</label>
          <MinutesAmountInput placeholder="00" type="number" id="minutesAmount" />

          <span>minutes.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton disabled type="submit"><Play size={24} />Start</StartCountdownButton>
      </form>
    </HomeContainer>
  )
}