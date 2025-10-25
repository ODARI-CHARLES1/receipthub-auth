import sql from 'mssql'
import {config} from 'dotenv'

config()

  const  SQL_USER=process.env.SQL_USER
  const  SQL_PWD=process.env.SQL_PWD
  const  SQL_DB=process.env.SQL_DB
  const  SQL_PORT=process.env.SQL_PORT
  const  SQL_SERVER=process.env.SQL_SERVER

export const configurations={
    port:SQL_PORT,
    sqlconfig:{
        user:SQL_USER,
        server:SQL_SERVER,
        database:SQL_DB,
        password:SQL_PWD,
       pool:{
        max:10,
        min:0,
         idleTimeoutMillis: 30000
       },
          options: {
            encrypt: true,
            trustServerCertificate: true
        }
    }
}

export const getPool=async()=>{
   try {
      const pool=await sql.connect(configurations.sqlconfig)
      return pool
   } catch (error) {
      console.log("Error connecting to db",error)
      throw error
   }
}