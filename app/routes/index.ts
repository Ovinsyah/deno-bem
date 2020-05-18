import { Router }from 'https://deno.land/x/oak/mod.ts'
import { getMahasiswas, getMahasiswa } from '../network/repositories/mahasiswa.ts'

const router = new Router()
router.get('/mahasiswa', getMahasiswas)
.get('/mahasiswa/:nim', getMahasiswa)

export default router