import { useNavigate } from "react-router-dom";
export default function Login() {
    const navigate = useNavigate();
    return (
        <div>
            <h1 className='mb-5 d-flex justify-content-center text-light'>Bem vindo!</h1>
            <form action="" >
                <div className="input-group mb-3">
                    <input type="text" className='form-control' placeholder='Insira seu nome' />
                    <div className="input-group-append">
                        <button onClick={() => navigate('/auto-atendimento')} className="btn btn-primary">Entrar</button>
                    </div>
                </div>
            </form>
        </div>
    )
}