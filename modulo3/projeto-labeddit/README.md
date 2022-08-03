# LabEddit

### Link
- https://flaky-position.surge.sh

O projeto é baseado em uma rede social (Reddit), contendo 4 páginas, sendo elas: página de Login, cadastro, Feed e Comentários de Post.

### Login
- Realiza a verificação de contas cadastradas no banco de dados.
- Tendo êxito na verificação o usuário é transferido para o Feed.
- O botão "Crie uma conta!" tranfere o usuário para página de registro.

### Resgistration
- Realiza o envio das informações do usuário para o banco de dados, assim, criando uma conta.
- Após criar a conta, o usuário é autenticado e transferido para o Feed.

### Feed
- Exibe as postagens feitas por outros usuários.
- O usuário é capaz de criar uma publicação, onde será visualizada nas postagens localizadas abaixo da caixa de texto.
- O usuário é capaz de votar com +1 ou -1 nas postagens.
- O usuário é capaz de visualiar os comentários de uma postagem em uma página separada.
- O usuário é capaz de fazer o logout, clicando no botão "Logout" localizado no canto superior direito.

### PostPage
- Exibe os comentário de uma determinada postagem.
- O usuário é capaz de votar com +1 ou -1 na postagem e nos comentários.
- O usuário é capaz de adicionar um comentário na postagem selecionada.
- O usuário é capaz de voltar ao Feed clicando no botão "X" localizado no canto superior esquerdo.


## Ferramentas
- Biblioteca React 
- Styled-components
- API Rest
- Hooks

