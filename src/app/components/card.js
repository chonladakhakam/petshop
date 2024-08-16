import Image from "next/image"

export default function card() {
    return(
        <div className="container-fluid">
            <div className="row"> 
                

            <div className="col-md-4">
                <div className="card">
                 <Image src="/assets/img/dog.png" layout="responsive" className="card-img-top" width={100} height={250} alt="Let's Go!" />
                 <div className="card-body">
                 <h5 className="card-title">Dog </h5>
                 <p className="card-text">ราคา 2,000-20,000 บาท</p>
                 <a href="#" className="btn btn-primary">ดูรายละเอียดเพิ่มเติม</a>
                </div>
            </div>
                </div>

                <div className="col-md-4">
                <div className="card">
                 <Image src="/assets/img/cat.png" layout="responsive" className="card-img-top" width={100} height={250} alt="Let's Go!" />
                 <div className="card-body">
                 <h5 className="card-title">Cat</h5>
                 <p className="card-text">ราคา 1,500-10,000 บาท</p>
                 <a href="#" className="btn btn-primary">ดูรายละเอียดเพิ่มเติม</a>
                </div>
            </div>
                </div>

                <div className="col-md-4">
                <div className="card">
                 <Image src="/assets/img/rabbit.png" layout="responsive" className="card-img-top" width={100} height={250} alt="Let's Go!" />
                 <div className="card-body">
                 <h5 className="card-title">Rabbit</h5>
                 <p className="card-text">ราคา 1,000-5,000 บาท</p>
                 <a href="#" className="btn btn-primary">ดูรายละเอียดเพิ่มเติม</a>
                </div>
            </div>
                </div>

            </div>
        </div>
    )
}