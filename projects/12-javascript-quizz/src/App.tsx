import { Container, Stack, Typography } from '@mui/material'
import './App.css'
import { JavaScriptLogo } from './components/JavaScriptLogo'
import { Start } from './components/Start'
import { useQuestionsStore } from './store/questions'
import { Game } from './components/Game'

function App () {
  const questions = useQuestionsStore(state => state.questions)
  console.log(questions)

  return (
    <Container maxWidth='sm'>

      <Stack direction='row' gap={2} alignItems='center' justifyContent='center'>
        <JavaScriptLogo />
        <Typography variant='h2' component='h1' fontFamily='roboto'>
          JavaScript Quizz
        </Typography>
      </Stack>

      {questions.length === 0 && <Start />}
      {questions.length > 0 && <Game />}
    </Container>
  )
}

export default App
