
import { MahasiswaModel } from '../model/mahasiswa.ts';

const books: Array<MahasiswaModel> = [{
  id: 1,
  name: "Kimbekerly lumos",
  nim: 209990001
},{
  id: 2,
  name: "Bambang bembem",
  nim: 209990002
},{
  id: 3,
  name: "Lolox A siks",
  nim: 209990003
}]

const getMahasiswas = ({ response }: { response: any }) => { 
  response.body = books 
}

const getMahasiswa = ({ params, response }: { params: { nim: string }; response: any }) => {
  const book: MahasiswaModel | undefined = searchMahasiswa(Number(params.nim))
  if (book) {
    response.status = 200
    response.body = book
  } else {
    response.status = 404
    response.body = { message: `Book not found.` }
  }   
}

const searchMahasiswa = (nim: number) => {
  return books.find(book => book.nim === nim );
}
export { getMahasiswas, getMahasiswa }