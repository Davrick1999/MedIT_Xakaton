import { useState, useEffect } from "react";
import Head from "next/head";
import Table from "../../components/Table";
import Select from "react-select"
import Link from "next/link";


function Clinics() {

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  return (
    <div className="flex flex-col items-center min-h-screen">
        <Head>
          <title>Doctor main</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1> Clinics</h1>
        <main>

          <Link href="/clinics/1">
            <div className="myCard my-4 border hover:border-blue-700">
              <div className="">
                <img src="https://media.istockphoto.com/photos/outpatient-surgery-center-picture-id181553727?k=20&m=181553727&s=612x612&w=0&h=HJQgVYgfwMY59Dv7OxMggan9kjgnWlvONzVZO3J_Bcg="/>
              </div>
              <div className="p-6">
                <h2 className="flex text-blue-600 cursor-pointer underline my-1">Palonchi asdas asdasd</h2>
                <p className="myCard-about">Cupidatat proident cillum incididunt sint. Elit magna adipisicing sit Lorem irure sit ullamco aliqua qui. Et voluptate Lorem culpa esse veniam laborum in cupidatat. In irure est anim reprehenderit consectetur consectetur do reprehenderit amet deserunt voluptate. Deserunt sint esse cupidatat amet fugiat ad. Aliquip adipisicing in Lorem in elit nisi cupidatat incididunt.</p>
              </div>
              <div className="p-6">
                <h1>4.7</h1>
              </div>
            </div>
          </Link>
          <div className="myCard my-4 border hover:border-blue-700">
            <div className="">
              <img src="https://media.istockphoto.com/photos/outpatient-surgery-center-picture-id181553727?k=20&m=181553727&s=612x612&w=0&h=HJQgVYgfwMY59Dv7OxMggan9kjgnWlvONzVZO3J_Bcg="/>
            </div>
            <div className="p-6">
              <h2 className="flex text-blue-600 cursor-pointer underline my-1">Palonchi asdas asdasd</h2>
              <p className="myCard-about">Cupidatat proident cillum incididunt sint. Elit magna adipisicing sit Lorem irure sit ullamco aliqua qui. Et voluptate Lorem culpa esse veniam laborum in cupidatat. In irure est anim reprehenderit consectetur consectetur do reprehenderit amet deserunt voluptate. Deserunt sint esse cupidatat amet fugiat ad. Aliquip adipisicing in Lorem in elit nisi cupidatat incididunt.</p>
            </div>
            <div className="p-6">
              <h1>4.7</h1>
            </div>
          </div>
          <div className="myCard my-4 border hover:border-blue-700">
            <div className="">
              <img src="https://media.istockphoto.com/photos/outpatient-surgery-center-picture-id181553727?k=20&m=181553727&s=612x612&w=0&h=HJQgVYgfwMY59Dv7OxMggan9kjgnWlvONzVZO3J_Bcg="/>
            </div>
            <div className="p-6">
              <h2 className="flex text-blue-600 cursor-pointer underline my-1">Palonchi asdas asdasd</h2>
              <p className="myCard-about">Cupidatat proident cillum incididunt sint. Elit magna adipisicing sit Lorem irure sit ullamco aliqua qui. Et voluptate Lorem culpa esse veniam laborum in cupidatat. In irure est anim reprehenderit consectetur consectetur do reprehenderit amet deserunt voluptate. Deserunt sint esse cupidatat amet fugiat ad. Aliquip adipisicing in Lorem in elit nisi cupidatat incididunt.</p>
            </div>
            <div className="p-6">
              <h1>4.7</h1>
            </div>
          </div>
          <div className="myCard my-4 border hover:border-blue-700">
            <div className="">
              <img src="https://media.istockphoto.com/photos/outpatient-surgery-center-picture-id181553727?k=20&m=181553727&s=612x612&w=0&h=HJQgVYgfwMY59Dv7OxMggan9kjgnWlvONzVZO3J_Bcg="/>
            </div>
            <div className="p-6">
              <h2 className="flex text-blue-600 cursor-pointer underline my-1">Palonchi asdas asdasd</h2>
              <p className="myCard-about">Cupidatat proident cillum incididunt sint. Elit magna adipisicing sit Lorem irure sit ullamco aliqua qui. Et voluptate Lorem culpa esse veniam laborum in cupidatat. In irure est anim reprehenderit consectetur consectetur do reprehenderit amet deserunt voluptate. Deserunt sint esse cupidatat amet fugiat ad. Aliquip adipisicing in Lorem in elit nisi cupidatat incididunt.</p>
            </div>
            <div className="p-6">
              <h1>4.7</h1>
            </div>
          </div>
          <div className="myCard my-4 border hover:border-blue-700">
            <div className="">
              <img src="https://media.istockphoto.com/photos/outpatient-surgery-center-picture-id181553727?k=20&m=181553727&s=612x612&w=0&h=HJQgVYgfwMY59Dv7OxMggan9kjgnWlvONzVZO3J_Bcg="/>
            </div>
            <div className="p-6">
              <h2 className="flex text-blue-600 cursor-pointer underline my-1">Palonchi asdas asdasd</h2>
              <p className="myCard-about">Cupidatat proident cillum incididunt sint. Elit magna adipisicing sit Lorem irure sit ullamco aliqua qui. Et voluptate Lorem culpa esse veniam laborum in cupidatat. In irure est anim reprehenderit consectetur consectetur do reprehenderit amet deserunt voluptate. Deserunt sint esse cupidatat amet fugiat ad. Aliquip adipisicing in Lorem in elit nisi cupidatat incididunt.</p>
            </div>
            <div className="p-6">
              <h1>4.7</h1>
            </div>
          </div>
        </main>
    </div>
  );
}

export default Clinics;
