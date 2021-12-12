    import React from 'react'
    import { Link } from 'react-router-dom';
    import { useState } from 'react';
    import axios from 'axios';
    import { useNavigate } from 'react-router-dom';

    const AddTdup = () => {
        const [jenis, setJenis] = useState('');
        const [namaUsaha, setNamaUsaha] = useState('');
        const [pemilik, setPemilik] = useState('');
        const [alamat, setAlamat] = useState('');
        const [noTdup, setNoTdup] = useState('');
        const [noSp, setSp] = useState('');
        const [noRek, setNoRek] = useState('');
        const [noOss, setNoOss] = useState('');
        const [ket, setKet] = useState('');
        const nav = useNavigate();

        const saveTdup = async (e) => {
            e.preventDefault();
            await axios.post('http://localhost:3001/tdup', {
                jenis_usaha: jenis,
                nama_usaha: namaUsaha,
                penanggung_jawab: pemilik,
                alamat_usaha: alamat,
                no_tdup: noTdup,
                no_surat_pengantar: noSp,
                no_rekomendasi: noRek,
                no_oss: noOss,
                ket: ket
            });
            nav('/');
        }


        return (
            <>
            <nav className="breadcrumb is-right" aria-label="breadcrumbs">
                <ul>
                <li><Link to="#">Admin</Link></li>
                <li><Link to="/">Data TDUP</Link></li>
                <li className="is-active"><span aria-current="page" className='ml-3'>Tambah Data</span></li>
                </ul>
            </nav>
            <div className='card p-4 mt-5 mb-5'>
                <h1 className='mt-4'><b>Data TDUP</b></h1>
                <p className='is-muted mb-6'>Isi data dengan sesuai</p>
                
                <form onSubmit={ saveTdup }>
                <div className='columns'>
                    <div className='column'>
                        <div className="field">
                        <label className="label">Jenis Usaha</label>
                        <div className="control">
                            <div className="select is-fullwidth">
                            <select onChange={(e) => setJenis(e.target.value)}>
                                <option value="">- Pilih jenis usaha -</option>
                                <option value="Rumah Makan">Rumah Makan</option>
                                <option value="Cafe">Cafe</option>
                                <option value="Toko">Toko</option>
                                <option value="Penyewaan">Penyewaan</option>
                                <option value="Lainnya">Lainnya</option>
                                
                            </select>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className='column'>
                        <div className="field">
                        <label className="label">Nama Usaha</label>
                        <div className="control">
                            <input onChange={(e) => setNamaUsaha(e.target.value)} className="input" type="text" />
                        </div>
                        </div>  
                    </div>
                </div>

                <div className="field">
                    <label className="label">Penanggung Jawab</label>
                    <div className="control mb-5">
                        <input onChange={(e) => setPemilik(e.target.value)} className="input" type="text" placeholder="Text input" />
                    </div>
                </div>  

                <div className="field">
                <label className="label">Alamat Usaha</label>
                <div className="control">
                    <textarea onChange={(e) => setAlamat(e.target.value)} className="textarea" placeholder="Textarea"></textarea>
                </div>
                </div>

                <div className='columns'>
                    <div className='column'>
                        <div className="field">
                        <label className="label">No TDUP</label>
                        <div className="control">
                            <textarea onChange={(e) => setNoTdup(e.target.value)} className="textarea" placeholder="Textarea"></textarea>
                        </div>
                        </div>
                    </div>
                    <div className='column'>
                        <div className="field">
                        <label className="label">No Surat Pengantar</label>
                        <div className="control">
                            <textarea onChange={(e) => setSp(e.target.value)} className="textarea" placeholder="Textarea"></textarea>
                        </div>
                        </div>
                    </div>
                </div>

                <div className='columns'>
                    <div className='column'>
                        <div className="field">
                        <label className="label">No Rekomendasi</label>
                        <div className="control">
                            <textarea onChange={(e) => setNoRek(e.target.value)} className="textarea" placeholder="Textarea"></textarea>
                        </div>
                        </div>
                    </div>
                    <div className='column'>
                        <div className="field">
                        <label className="label">No OSS</label>
                        <div className="control">
                            <textarea onChange={(e) => setNoOss(e.target.value)} className="textarea" placeholder="Textarea"></textarea>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Keterangan</label>
                    <div className="control">
                        <textarea onChange={(e) => setKet(e.target.value)} className="textarea" placeholder="Textarea"></textarea>
                    </div>
                </div>

                <div className="field is-grouped mt-5">
                <div className="control">
                    <button className="button is-success">Simpan</button>
                </div>
                <div className="control">
                    <Link className="button is-text" to='/'>Batal</Link>
                </div>
                </div>
                </form>
                {/* {jenis} - {namaUsaha} - {pemilik} - {alamat} - {noTdup} - {noSp} - {noRek} - {noOss} - {ket}     */}
            </div>
            </>
        )
    }

    export default AddTdup
