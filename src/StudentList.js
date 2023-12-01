import React from "react";
import students from "./Students";
import Student from "./Student";

const StudentList = ()=>{
    return (
        // <div className="pricing-page">
        //     <h2>Student List</h2>
        //     <div>
        //         {students.map((student,index)=>(
        //             <Student key={index} {...student} />
        //         ))}
        //     </div>
        // </div>
    

    <div className="container-fluid" >
        <div className="container p-5">
            <div className="row">
                
                    {students.map((student,index)=>(
                        <div key={index} className="col-lg-4 col-md-12 mb-4">
                        <Student {...student} />
                        </div>
                ))}
            
        </div>
    </div>
</div>
);

}

export default StudentList;