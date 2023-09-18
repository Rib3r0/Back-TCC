interface User {
    nome_usuario    :  String,
    nome_completo   ?: String,
    email           :  String,
    senha           :  String,
    data_nascimento :  Date,
    foto_perfil     ?: String,
    foto_capa       ?: String,
    id_genero       :  Number
}