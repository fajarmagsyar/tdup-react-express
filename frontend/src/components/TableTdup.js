import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';

const TableTdup = () => {
    const [Tdup, setTdup] = useState([]);


    const getTdup = async () => {
      const resp = await axios.get('http://localhost:3001/tdup');
      setTdup(resp.data);
    }
    useEffect(() => {
      getTdup();
    }, []);

    const deleteTdup = async (id) => {
      await axios.delete(`http://localhost:3001/tdup/${id}`);
      getTdup();
    }

    return (
      <>
      <nav className="breadcrumb is-right" aria-label="breadcrumbs">
        <ul>
          <li><Link to="/</li>">Admin</Link></li>
          <li className="is-active"><span aria-current="page" className='ml-3'>Data TDUP</span></li>
        </ul>
      </nav>
      
        <div className='card p-4 mt-5'>
          <div className='columns'>
            <div className='column'>
              <h1 className='mt-4 ml-3'><b>Data TDUP</b></h1>
              <p className='is-muted ml-3'>List Data TDUP yang telah terdaftar, klik tombol "Detail" untuk lihat lebih lengkap</p>
            </div>
            <div className='column is-one-fifth my-auto is-left'>
              <Link className="button is-success" to="/addTdup">+ Tambah</Link>
            </div>
          </div>
            <div className='table-container'>
              <table className="table is-fullwidth is-striped">
                <thead>
                  <tr className='is-primary'>
                    <th>No</th>
                    <th>Jenis Usaha</th>
                    <th>Nama Usaha</th>
                    <th>Pemilik</th>
                    <th>Alamat</th>
                    <th>Detail</th>
                  </tr>
                </thead>
                <tbody>
                {Tdup.map((r, index) => (
                  <tr key={r.tdup_id}>
                      <td>{index + 1}</td>        
                      <td>{r.jenis_usaha}</td>        
                      <td>{r.nama_usaha}</td>        
                      <td>{r.penanggung_jawab}</td>        
                      <td>{r.alamat_usaha}</td>        
                      <td>
                        <Link className="button is-primary mr-3" to={'/usaha/'+r.tdup_id}>{'>'}</Link>
                        <button class="button is-danger" onClick={() => {if(window.confirm('Item ini akan terhapus, anda yakin?'))(deleteTdup(r.tdup_id))}}>X</button>
                      </td>        
                  </tr>
                ))}
                </tbody>
              </table>
            </div>
            
        </div>
        </>
    )
}

export default TableTdup
