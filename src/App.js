import { NormalizeStyles } from './shared/NormalizeStyles'
import { Inicio } from './screens/Inicio'
import { SobreMimKayke } from './screens/SobreMimKayke'
import { SobreMimBruna } from './screens/SobreMimBruna'
import { FormacaoKayke } from './screens/FormacaoKayke'
import { FormacaoBruna } from './screens/FormacaoBruna'
import { ExperienciaKayke } from './screens/ExperienciaKayke'
import { ExperienciaBruna } from './screens/ExperienciaBruna'
import { HobbiesKayke } from './screens/HobbiesKayke'
import { HobbiesBruna } from './screens/HobbiesBruna'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export function App() {
  return (
    <>
      <NormalizeStyles />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inicio />}/>
          <Route path='/sobremim/kayke' element={<SobreMimKayke />}/>
          <Route path='/sobremim/bruna' element={<SobreMimBruna />}/>
          <Route path='/formacao/kayke' element={<FormacaoKayke />}/>
          <Route path='/formacao/bruna' element={<FormacaoBruna />}/>
          <Route path='/experiencia/kayke' element={<ExperienciaKayke />}/>
          <Route path='/experiencia/bruna' element={<ExperienciaBruna />}/>
          <Route path='/hobbies/kayke' element={<HobbiesKayke />}/>
          <Route path='/hobbies/bruna' element={<HobbiesBruna />}/>
          <Route path='*' element={<>Página não encontrada</>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
