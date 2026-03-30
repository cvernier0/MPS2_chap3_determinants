var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "al1-recap_chap7_det-3",
  "level": "1",
  "url": "al1-recap_chap7_det-3.html",
  "type": "Section",
  "number": "1",
  "title": "Testez vos réflexes",
  "body": " Testez vos réflexes   Vrai ou faux ?   Le déterminant d'un produit de matrices est égal à .   C'est une propriété classique (mais difficile à montrer !) du déterminant.    La déterminant d'une somme de matrices est égal à .   Malheureusement, ce n'est pas si simple ! Par exemple,      Si on échange deux lignes, le déterminant de change pas.    Pas tout à fait : dans ce cas, le déterminant change de signe. Par exemple:      Soit un réel. On considère une matrice de taille dont la première colonne est et la dernière colonne est   Il existe des valeurs de pour lesquelles est inversible.    Non, quel que soit , et quelles que soient les 48 autres colonnes de , ne peut pas être inversible, car elle a deux colonnes proportionnelles.  On peut le mettre en évidence: avec l'opération , on trouve   Et il ne reste plus qu'à développer par rapport à la dernière colonne pour obtenir , donc ne peut pas être inversible.      Le déterminant de la matrice est égal à , car c'est le produit de ses coefficients diagonaux.    Pas forcément, car n'est pas ce qu'on appelle une matrice diagonale: ce n'est pas la bonne diagonale !  En fait, ça dépend de la taille de la matrice. On peut calculer:   Challenge : Trouver une formule pour le déterminant de cette matrice en fonction de sa taille !     "
},
{
  "id": "al1-recap_chap7_det-3-2-2",
  "level": "2",
  "url": "al1-recap_chap7_det-3.html#al1-recap_chap7_det-3-2-2",
  "type": "Exercise",
  "number": "1.1",
  "title": "",
  "body": " Le déterminant d'un produit de matrices est égal à .   C'est une propriété classique (mais difficile à montrer !) du déterminant.  "
},
{
  "id": "al1-recap_chap7_det-3-2-3",
  "level": "2",
  "url": "al1-recap_chap7_det-3.html#al1-recap_chap7_det-3-2-3",
  "type": "Exercise",
  "number": "1.2",
  "title": "",
  "body": " La déterminant d'une somme de matrices est égal à .   Malheureusement, ce n'est pas si simple ! Par exemple,    "
},
{
  "id": "al1-recap_chap7_det-3-2-4",
  "level": "2",
  "url": "al1-recap_chap7_det-3.html#al1-recap_chap7_det-3-2-4",
  "type": "Exercise",
  "number": "1.3",
  "title": "",
  "body": " Si on échange deux lignes, le déterminant de change pas.    Pas tout à fait : dans ce cas, le déterminant change de signe. Par exemple:    "
},
{
  "id": "al1-recap_chap7_det-3-2-5",
  "level": "2",
  "url": "al1-recap_chap7_det-3.html#al1-recap_chap7_det-3-2-5",
  "type": "Exercise",
  "number": "1.4",
  "title": "",
  "body": " Soit un réel. On considère une matrice de taille dont la première colonne est et la dernière colonne est   Il existe des valeurs de pour lesquelles est inversible.    Non, quel que soit , et quelles que soient les 48 autres colonnes de , ne peut pas être inversible, car elle a deux colonnes proportionnelles.  On peut le mettre en évidence: avec l'opération , on trouve   Et il ne reste plus qu'à développer par rapport à la dernière colonne pour obtenir , donc ne peut pas être inversible.   "
},
{
  "id": "al1-recap_chap7_det-3-2-6",
  "level": "2",
  "url": "al1-recap_chap7_det-3.html#al1-recap_chap7_det-3-2-6",
  "type": "Exercise",
  "number": "1.5",
  "title": "",
  "body": "  Le déterminant de la matrice est égal à , car c'est le produit de ses coefficients diagonaux.    Pas forcément, car n'est pas ce qu'on appelle une matrice diagonale: ce n'est pas la bonne diagonale !  En fait, ça dépend de la taille de la matrice. On peut calculer:   Challenge : Trouver une formule pour le déterminant de cette matrice en fonction de sa taille !   "
},
{
  "id": "al1-recap_chap7_det-4",
  "level": "1",
  "url": "al1-recap_chap7_det-4.html",
  "type": "Section",
  "number": "2",
  "title": "Entraînez-vous",
  "body": " Entraînez-vous    Sans calcul !   Trouver les déterminants des matrices suivantes:               C'est ça!  La première colonne de est nulle, donc son déterminant est nul.  Plus généralement, par multi-linéarité, si a une ligne ou une colonne nulle, alors .      La première colonne de est nulle, donc son déterminant est nul.  Plus généralement, par multi-linéarité, si a une ligne ou une colonne nulle, alors .                   C'est ça !  Les deux premières lignes de sont proportionnelles, donc       Les deux premières lignes de sont proportionnelles, donc                    C'est ça!   est une matrice triangulaire, donc son déterminant est le produit des coefficients diagonaux:        est une matrice triangulaire, donc son déterminant est le produit des coefficients diagonaux:          Toujours sans calcul !   Supposons qu'on a une matrice de déterminant 3. Trouver les déterminants des matrices suivantes:               C'est ça!  On obtient à partir de par l'opération , donc .      On obtient à partir de par l'opération , donc .                   C'est ça!  On obtient à partir de par l'opération , ce qui change le signe du déterminant. Donc .      On obtient à partir de par l'opération , ce qui change le signe du déterminant. Donc .                   C'est ça!  On obtient à partir de par les opérations , ce qui change le signe du déterminant, puis , ce qui multiplie le déterminant par 2.  Donc .      On obtient à partir de par les opérations , ce qui change le signe du déterminant, puis , ce qui le multiplie par 2.  Donc .                   C'est ça!  On obtient à partir de par les opérations , ce qui change multiplie le déterminant par 2, puis , ce qui ne change pas le déterminant.  Donc .      On obtient à partir de par les opérations , ce qui change multiplie le déterminant par 2, puis , ce qui ne change pas le déterminant.  Donc .         Avec calcul !   Calculer les déterminants des matrices suivantes:               C'est ça !                             C'est ça!                             C'est ça!         C'est ça!                   "
},
{
  "id": "al1-recap_chap7_det-4-3-3",
  "level": "2",
  "url": "al1-recap_chap7_det-4.html#al1-recap_chap7_det-4-3-3",
  "type": "Exercise",
  "number": "2.1",
  "title": "",
  "body": "            C'est ça!  La première colonne de est nulle, donc son déterminant est nul.  Plus généralement, par multi-linéarité, si a une ligne ou une colonne nulle, alors .      La première colonne de est nulle, donc son déterminant est nul.  Plus généralement, par multi-linéarité, si a une ligne ou une colonne nulle, alors .      "
},
{
  "id": "al1-recap_chap7_det-4-3-4",
  "level": "2",
  "url": "al1-recap_chap7_det-4.html#al1-recap_chap7_det-4-3-4",
  "type": "Exercise",
  "number": "2.2",
  "title": "",
  "body": "            C'est ça !  Les deux premières lignes de sont proportionnelles, donc       Les deux premières lignes de sont proportionnelles, donc       "
},
{
  "id": "al1-recap_chap7_det-4-3-5",
  "level": "2",
  "url": "al1-recap_chap7_det-4.html#al1-recap_chap7_det-4-3-5",
  "type": "Exercise",
  "number": "2.3",
  "title": "",
  "body": "            C'est ça!   est une matrice triangulaire, donc son déterminant est le produit des coefficients diagonaux:        est une matrice triangulaire, donc son déterminant est le produit des coefficients diagonaux:       "
},
{
  "id": "al1-recap_chap7_det-4-4-3",
  "level": "2",
  "url": "al1-recap_chap7_det-4.html#al1-recap_chap7_det-4-4-3",
  "type": "Exercise",
  "number": "2.1",
  "title": "",
  "body": "            C'est ça!  On obtient à partir de par l'opération , donc .      On obtient à partir de par l'opération , donc .      "
},
{
  "id": "al1-recap_chap7_det-4-4-4",
  "level": "2",
  "url": "al1-recap_chap7_det-4.html#al1-recap_chap7_det-4-4-4",
  "type": "Exercise",
  "number": "2.2",
  "title": "",
  "body": "            C'est ça!  On obtient à partir de par l'opération , ce qui change le signe du déterminant. Donc .      On obtient à partir de par l'opération , ce qui change le signe du déterminant. Donc .      "
},
{
  "id": "al1-recap_chap7_det-4-4-5",
  "level": "2",
  "url": "al1-recap_chap7_det-4.html#al1-recap_chap7_det-4-4-5",
  "type": "Exercise",
  "number": "2.3",
  "title": "",
  "body": "            C'est ça!  On obtient à partir de par les opérations , ce qui change le signe du déterminant, puis , ce qui multiplie le déterminant par 2.  Donc .      On obtient à partir de par les opérations , ce qui change le signe du déterminant, puis , ce qui le multiplie par 2.  Donc .      "
},
{
  "id": "al1-recap_chap7_det-4-4-6",
  "level": "2",
  "url": "al1-recap_chap7_det-4.html#al1-recap_chap7_det-4-4-6",
  "type": "Exercise",
  "number": "2.4",
  "title": "",
  "body": "            C'est ça!  On obtient à partir de par les opérations , ce qui change multiplie le déterminant par 2, puis , ce qui ne change pas le déterminant.  Donc .      On obtient à partir de par les opérations , ce qui change multiplie le déterminant par 2, puis , ce qui ne change pas le déterminant.  Donc .      "
},
{
  "id": "al1-recap_chap7_det-4-5-3",
  "level": "2",
  "url": "al1-recap_chap7_det-4.html#al1-recap_chap7_det-4-5-3",
  "type": "Exercise",
  "number": "2.1",
  "title": "",
  "body": "            C'est ça !                "
},
{
  "id": "al1-recap_chap7_det-4-5-4",
  "level": "2",
  "url": "al1-recap_chap7_det-4.html#al1-recap_chap7_det-4-5-4",
  "type": "Exercise",
  "number": "2.2",
  "title": "",
  "body": "            C'est ça!                "
},
{
  "id": "al1-recap_chap7_det-4-5-5",
  "level": "2",
  "url": "al1-recap_chap7_det-4.html#al1-recap_chap7_det-4-5-5",
  "type": "Exercise",
  "number": "2.3",
  "title": "",
  "body": "            C'est ça!         C'est ça!                "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
