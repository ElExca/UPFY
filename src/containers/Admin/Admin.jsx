import React, {useContext, useState} from "react";
import "./admin.css"
import {UserContext} from "../../context/UserContext.jsx";
import {Link} from "react-router-dom";

function Admin(){

    const{createSong, updateSong, deleteSong} = useContext(UserContext)

    const [song, setSong] = useState({
        songtitle: "",
        songartist:"",
        songgenre:"",
        songurl:"",
        songimg:""
    })

    const handleChange = (e) => {
        setSong({...song,[e.target.name]: e.target.value})
        console.log(song);
    }

    const crearSong = (e) => {
        e.preventDefault();
        createSong(song);
    }

    const actualizarSong = (e) => {
      e.preventDefault();
      updateSong(song);
    }

    const borrarSong = (e) => {
        e.preventDefault();
        deleteSong(song);
    }

    return (
        <div className="admin">
            <div className="column">
                <div className="icon">
                    <div><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAABLVJREFUaEPtmotxFDEMhqUKoAOgAugAUgGkAqACQgWECggVQCogVECoAKiAUAGhAjEfyBlnz14/1pdbSDyzk5dP1q/HL1kblWu29JrhlRvA/7vHbzw80sNmdltEHorIA3/4+a4/HHXmD9+fishXEfmsqucj9YhlDfewg3wsIgcOskd3gL8XkY+qilGGrWGAzQzPvRKRZ8O0+ysI4K9HAV8M2D36QkQOBwOdijty4IvCfRFgM3skIu+inNwyZgHsc1U96T2oG7CZEb7b9moO15GqvuwB3QXYzPDq6Fxt1R8v4+2mEG8GvBKwwTiw+V4L6CbAKwMbQJ+o6n5teFQDNjPylbxd43qrqtT94qoC7Gz8qShttxv2a9i7CNjr7JcrLD29ZoO87pXyuQbwmkN5apxjVZ2tHrOAvV383mjyz74fi8Oi08UFgstEWLSkdxrPmNuOl7P9dwkwfezTGemA45bDc7ak33WeCDcpOjhuWT1r1stZwJ67PzMnfqTxKOVLj7bhM34+wJ+ICF9boiDr5TnA5AId1cZS1WLuLwGb+qxHADrNRVz46EtV5bKxqXtOMTODmeNcu9i6C8CR5wl7iHQOOOl1rxpwIZyRQztH3v5Zvv++GwiFgqH4CknFK55y8Ps/+e8cEAivGCBOqHiRYUNqJcM6GZpmRt58mDkVBqZ5R1H2JiOhqHV6AzKRfaqqcMXsMjN0uZXYxMUC0r20coDXUnsBQwTQOl5EVIzAzPh9itGZkmxcX3OAsXAuVEpG39bfAfZeVY8nqUSfME0btjAMhN2rPJyz2hwY8o9Gg4ewPFfVjcbD2TbIQaGQ83BAzUJ2CFVYm8+nVpK4ch7GajlBsXByjOlDMtxqtJ+EZ6i78EJL3U0elaomOcBWoew3VR1JVpeONDNk40GeFCkVVRwNmJkxnsguM9sgE1WtLj0I9pLHXZenCXgLYPKkFFIwKHfQU6+JgAs5uUEWCauEy0Wow5BMtumPgFcPIVoA95BWMcQqNhTfOJhZtuWdyE+m3JrLEkanll4ixIbpS1NZWkvjgdMugHtY0wHWpExyztXbWuaiM9TikJ9zM+PWGky4t1SFptaSziV3F47B/nL2pO9d9JbP+3dYn6eJjTPWr788eDnAoqXup3o8WkFYF1scPGWod+rxQ1WTjdPcAIAD3xQUxbN7YY+XJ8pZyLFcroWQx6iwaTI6nKBoI0slcqpm1wCgNqxRGgCpu2+tY8OVkHlUqv8uzdam57SPeDysWw+qBTi3D/CHk1tR6X4ey+sb4jlg8qB1TDsCNDIATlr98NlaLUP3j2kdNGMU3vD/C6tIosXpoxd7rD2iVGzTaJTIu6XRcRGwexm2vR4v06KSs6Z2cxopxVAOH6jycAR6F6xdSoPiC7RYQBPghg6spOSov3+jySnl7SLAO6zPUyMxvTxoAYuAZg9H4b3LclWds1MrdQOO2JsZ9lWVLEoPby2v/h/TIk/Tc8Pg225OukJ4qIdjYX5TKr3V6yErgNJbL7pvd5WlGm0dOM0+w7bSfTonkv4ZjuB/sIYA3RrghNfj0S3hPzUC4AAVXtMsnp7MOWYRadV4fG17bgCvzSOj9bnx8GiLrk3eb2apvkwcu7M9AAAAAElFTkSuQmCC"/></div>
                </div>

                <div className="box">
                    <div className="box-center">
                        <div className="icon-menu">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAAA31JREFUaEPtmltv2jAUx+NcYJSLAogyWNfSMaFtUp+27/8JtqdK04TESltG1zEgItAwQuLJ3SKhKIkvsZNsDY+Jfc75nWObv+0A6Yn9wBPjlXLg/73ieYVFV9g0vx/b9qaN/Gha+b5aff5DtM9D+4lWGME6zq+XhwHIsjKu1U7mSUEnBrxaTZqu6/SCwJKETgR4ubzSAZD7UVW0bWvYar0xRVdaOPB0+vGoVGoOAJCVKBgIXcey5sNu98ODSGihwKSwHmAS0MKAIYTKcvn1nSyrBZqKKQp8qFTOhgAAh6YfaVshwAh2vb4eOA44Ig3ksJ1IaCHApjl+ywrrgcuyYtZqJ0OWhEX14Q68XF71AJCbPAKF0J3X6+djHrY8G1yBecIeLGRcobkBB6koXpXhKUy4AEepqKxBxwYmUVG8oHmosVjAtMIiLjgPYcIMnDQsLzXGBMyqouJW2OsfR5hQA8dVUWlDUwPzUFG8oFnUGBWwCGERF55WjREDZxGWRY0RAYtUUXErfLDZIDobwwInoaKShI4ETlJF8YLGqbFQ4LSERVxwnBoLBP5XYUnUWCDwajUZuK5TjZvtNPuH/UcHAhvG9fs0g+XlW9fPPvlthQDf9CUJ6rwcp2MHGLp+OiICRnrZNL/1WYa140hWoVD8uduti4qiHbPAOo7994JNqyqKVKK1gYZztfpiFHTUi/0f9jubzW66mgY7h8/RyqiqpWml0jYAADv0DiXNMMYXuBsHv31kS9d7l16wEMLCen2v7/dW12/LtsFdq3U6pUkIF2DX3e8ajf6l3zGLaAk7v1osRhf+Q/3UgBFoWKA0GjxsIxCWuFSBUZXr9Vefg+ZN0DTwjwZFKd4GXY5HTY1Ugf/M2/CDczQXF4tRW9OelbzFEC0utr21Go3+vTf3/YmIGiGpA0cNbZqFxWuLWwMyAcwLGgeL/GQGGAWjaXBaLvfuWCq72Yw7tg26uL6ZAkbBotPF7XY7If2UAW1HVRV0SG8eMwfsVQit4BBCw3X3BnrmJWA2+/K4QZFlVQcA6LSX55kFxg1N1vc5MEHmuEhLAj9CmuQVJkhrXmFckkh0Mc4Gr/f5kCbIZD6kcUki0bg4G7zeQ+iO6vXzRzFD+qOuMDKMtmySJKEvZCM/GCUNgqUdOvdqNl/f0vZlAqZ1kqX2OXCWqiEilrzCIrKaJZu/AVkWWFvzmBA0AAAAAElFTkSuQmCC"/>
                        </div>
                        <div className="icon-menu">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAABFJJREFUaEPtmutV2zAUgO/1AkXJAHEmIJ2gYQLCBKUTFCYgTEA6QcMEDRM0TNAwgZ0BEtEFrJ5rK4HYsvWw7JiCzuEHYEn3033qgfDOGr4zXvgA/t81/qFhnxrmPAoB4AskwQhQjACAfqef1y0GgBgEriBIVgDwyNiQ/tZI865hCXkOAq8UcKYQMaCYAcCDb3hvwCloEtwAiktTKqPvBM4hSG59gdcG5jw6gSS48w6aX40M/Jqx4bPRQpV8VAuY82gCAn8CwEkdISz6PgOKb4wNFxZ9Dj51BuabNWmV/LT9JnDG+oNrl4mtgVMTFvgLAMYuE3rss5DatjJxK2AJ+xsAKMV0oa0AxZmNX9sBb2PS7KQLpK9kWLBeeGEqkzEw30QzQPxuOPAjoJhCAhOLPoZDKz4T4gfrD43iiRGwjMakXV37S+lpF0XT3Cww0nXy8n8UFybRWwss/ZaE1qWeJwlL5eG+8e16ASDOvUBVD0Ipa6jzZz3wZj0HFF81ApMJT1STcR6NQSAFuuabwHvWH1RWepXAhiZJmh2XrSzn0QgE/mmeVs6Qabl081ENrNcu+exINUFrJWd+JTVaLgU20m6WA5f5OaVWKcjlt4LtKLpCy1XAVyDwrkLCR9YLC9WWhCWf1QW55uBR0CaDtpeFVg68jSkyl2sIxWfGhocROSs7yV+Po9kXvJj1wqExsN6c8YH1BoWKi+t9vjmt5kcuMWulhjmPLuW2Ty1gtkWbH+TbtqOxbukUMlIXNbCujFSsnpl28QEwId/auQKlrGl67uW7lZSbauBtTJG3TIgn1gsLuyW+jXlloBLilvWHBFdofBNNAfHGM7MyqJYBVwWswkD6akrt8wcuUb3ILmuhDFxlwKJ0BkVi124uSvJ1LgZ4L0FZLyzwOQAXTVNrkiiYrqiXmxRyC2/ND7CLOGbA3reSxwRWlqBdMmnabQxclFnSZ8l64VnVeHwbUznq82BwzXphoeJzSUtu6yBwyvqDW3VaWtONhTJluU2W9rJIS7rCw12KpQR7kkOcysLDp2azoa0KD11p6Q7cXk+r0rLNw7emlsBm80Ay8G3sO3A1haYaVxmw6MM6BwBtAtjN5XQA8JbN2uWIJzXrLm3oTXXseoiXAr9FLdc5pn1zWq57EC+1TAdzFLE/mVrVkb6jM/JQtyvTXrVIaHraYHKZdiRWyjeeLtN2BJbXpe2C+74u3UO3dxNosWD646PXgxmZ9B44O2inA75TC4ma/LTyIk81sRXwSxAL5i3d+VYsVnrkS5fvzT1qeT37UX3awmfzK2at4QPo7GEa3UC0lbIOnlS4+Eot4L2JJ8HM4JWAi3wvfQTeQ5Bc2ZqwVw3ntE2PS6fewTPQaWcel+ZXUD4fJlOnZ0SuB4Fr+Xx44Qt0J2dtk66yUwk/hgRGgLh7IJ5fhHX2QFysIEgv2Za+IZ3zcD0n7EbvRjXcDcRDKT6Au6gVnzK9Ow3/A+3NE1tW5t70AAAAAElFTkSuQmCC"/>
                        </div>
                    </div>

                </div>

                <div className="box">
                    <div className="box-center">
                        <div className="icon-menu">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAAA7RJREFUaEPtmf9P2kAUwHs9K1KttCJkY8pwLu5LYmKy/f9/wZaYLJmbmRPR4QJCC2gRy7XLy9KE1St3J/0ya/n13l3f53259+6BpCf2Q0+MV8qBs+7x3MO5hzNmgTykM+bQezi5h0U87HkeHo1+6Y5zqyrKStF1iQb7ZRmPHOd2rCgrtqa9sBBCROTcOGUf7OFu95uGsdKQ5aXleQq67vSOEKdZqbwdxQnCe7YwMHi13z+pYaxUeT8CcoQ4nY2N3Xba3hYG7vV+bIvC+oYB6HL59bmIoaKWFQKGMFaU4t4iSjjO+DjN8OYGhlA2zZ/vaTnreW5vOp30fJC/hlGrkuTpQeNAThvGq69phTY38Gj0u0rIZDsIIMu4ub6+1aN5fTi8KLsuaYjsWSR6ePZyA9NzF1m6Xj+Z9yHLau0GPZ1mLnMDD4cXe36d9QF58pGW91Cn19e3jnk8ErUMN7Bpnh4gJONZBUql+iErFyH3B4PWwew+z3OJYewcRg3Dc96jAe52WzVF8Z7PQjkOuqxU6m0eUF+GGzjtkE4cOO1LK3HgtMtS4sDzGg9JQpbj2J04G4/EgSHp02wtUwEG6LQeD6kBx/k8vLlp/lN2ZssNIUtasPGBBgbjaeg7e3W1cRksWdxlKbgxjgGAZZ19EKmpLFldf/k5MmA4KOoRz38PzLKw6HoOLGqxgHykIe153vLV1feCqq6szdPLtm+vNzffTBBCdyz94SYOkykU5DXapTWZuNdhe2h9ttClBTlr22dV15V0QpDKAphdx9izZVmyVPVlh/XCop2beFkyzVPd89xt1liWZQQY8SAknxvGjsWSnV1PFHiRZiMMSnTqkRiwaZ42EJLLIt7glYXhn2HsNHnkEwEOeyH5CkJ4yrJiO440pimtKFLRdR11XhpgXDjXtGcdFnTswHALDwatfZoihEjjyaTbrNU+2ixFYb3d/qQWCpUGxlKRJl8q1b+wbvHYgWkTDlD2IWMVH5KmNKzxDPViBQaPqGrl3X1vsMeyLI/Txrawx7a7R7wRw/rGvHVqHablLkwadb0BobfQX59Qyy2ruR+cgPLm8iKwsJcKTB/YiU8Iw5SjhSdPWC8KGwrc75/sB29WnqE7r0K0yQl0YprWOOI946FyVA/TXi08Q3deJWjDedhLa/Z5z+SV4waOWhmaUaP+Bs0IOTBYhfZME/1LgxViSXyD28MsZR/zutB7+DGD+rrnwFnwonBrmWXoPKSz7N3QXjrL0HlIZ9m7eUhn3bvA9wctWoxbyOKRYAAAAABJRU5ErkJggg=="/>
                        </div>
                        <div className="icon-menu">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAAAedJREFUaEPtWtFKwzAUTVr2NoZdmeCQ6dA/0P//DweyqkPFUVpWtz2UNJKHQS3rcm9tuprcvuY2yTnnnuQmLWeOPdwxvIwA2644KQxROEmWt4yxC849HxJvIkaI/CsM79+wfaMVTpKlAnqHHchEvJTFcxDMU0zfaMDr9et0MJBXmEFMxeY5/5hMZu+Y/gmwji1SWMeQwXZKaQC55GEdSeRhHUMG28nDAHLJwzqSyMM6hgy2k4cB5Br3sOf5UVEIdZxs/emVwlIWYr+PF9Pp4y5NXx5aR8sY6w1gIdh+PJ49cc6FAmo1YCmLOAjmUVlRawErv45G13E1fa0DXPbrMa9aBbjqV6sBH/PrMcCqOmu6Sp+6P+t0la7za1Ngde+dskMngLPs8zLLVt9qf20bHNYOBBigQOPS0pmULh8PoYvWdhs1vrjPc1674HWS0tXzsO/L3XB4sziUkVgfArKwNuQsgNVsnCo8yvQ7U1qWQTt1eDgAr/raqlq6bkVx6gKg6msnrnj+st1A3z3btgSdYNtxBBjAaONaGtC38RBSGEAxKawjiT6m6Rgy2E4eBpBLHtaRRB7WMWSwnTwMIBft4c1mFZo6/QDm+yukk9+H1YhO/SCOVaFv8eiU7hsA7HwIMJax/xbvnMI/dmsuWw+tRqAAAAAASUVORK5CYII="/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="admin-section">

                <div className="box-input">
                    <h3>Agregar Cancion</h3>
                    <h5>Ingresa los datos de la canción que deseas agregar.</h5>

                    <form onSubmit={crearSong}>
                    <div className="admin input-admin">
                        <input onChange={handleChange} type="text" placeholder="Nombre de la canción"  name="songtitle" className="input" required />
                    </div>

                    <div className="input-columns">
                        <div className="admin input-admin">
                            <input  onChange={handleChange} type="text" placeholder="Artista"  name="songartist" className="input" required />
                        </div>
                        <div className="admin input-admin">
                            <input  onChange={handleChange} type="text" placeholder="Genero"  name="songgenre" className="input" required />
                        </div>
                    </div>

                    <div className="admin input-admin">
                        <input  onChange={handleChange} type="text" placeholder="URL de la canción"  name="songurl" className="input" required />
                    </div>

                    <div className="admin input-admin">
                        <input  onChange={handleChange} type="text" placeholder="URL de la imagen de la canción"  name="songimg" className="input" required />
                    </div>

                    <div className="admin button-admin">
                        <button>Publicar Canción</button>
                    </div>
                    </form>
                </div>

                <div className="box-input">
                    <h3>Actualizar Canción</h3>
                    <h5>Ingresa el nombre de la canción y actualiza los datos necesarios.</h5>

                    <form onSubmit={actualizarSong} >
                    <div className="admin input-admin">
                        <input onChange={handleChange} type="text" placeholder="Nombre de la canción"  name="songtitle" className="input" required />
                    </div>

                    <div className="admin input-admin">
                        <input onChange={handleChange} type="text" placeholder="URL de la canción"  name="songurl" className="input" required />
                    </div>

                    <div className="admin input-admin">
                        <input onChange={handleChange} type="text" placeholder="URL de la imagen de la canción"  name="songimg" className="input" required />
                    </div>

                    <div className="admin button-admin">
                        <button>Actualizar Canción</button>
                    </div>
                </form>
                </div>

                <div className="box-input">
                    <h3>Eliminar Canción</h3>
                    <h5>Ingresa el nombre de la canción que deseas eliminar.</h5>

                    <form onSubmit={borrarSong}>
                    <div className="admin input-admin">
                        <input onChange={handleChange} type="text" placeholder="Nombre de la canción"  name="songtitle  " className="input" required />
                    </div>

                    <div className="admin button-admin">
                        <button>Actualizar Canción</button>

                    </div>
                    </form>
                </div>
            </div>



        </div>
    )
}

export default Admin;