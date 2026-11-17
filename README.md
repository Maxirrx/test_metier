# Solution de séparation métier et applicatif 

j'ai imaginé rapidement a quoi aurait pu ressemblé l'application si il avait fallu séparé le métier de l'applicatif
Voila comment j'aurais fais !!

je fais des entités protected jusqu'au plus bas que je puisse cela permet dans le cas des contrats d'avoir la premiere distinction entre contrat Perin et (PERO PEI) qui eux sont plus entreprise

Donc contract Perin hérite de Contract qui est le contrat de base tandis que contrat Pero et pei herite de contrat company qui lui meme herite de contrat ce qui permet de placer des rules pour chaque niveau par exemple au niveau du contrat comme le status qui ne peut pas etre inventé ou la date qui ne peut pas etre un autre type que date, apres les regles sur les contrats entreprise comme quoi un nom d'entreprise doit etre valide.

Mais on peut aussi mettre des regle individuel a chaque contrat comme les tns pour les contrat PErin.

Grace a ca on assure que les données seront les même de partouts et on peut faire suivre des regle métier pour plein d'autre interaction avec la donnée

Demain si le produit nous disait que lorsque l'on modifie un status d'un contrat PERO on ne peut plus passer de cancel a OK mais on doit le refaire passer a draft pour X raison et que cela devient la nouvelle regle de base pour les intéractions de status PERO on a juste a définir la règle dans le ContractPeroEntity.validate() grace au Rules et on est sur que tout le monde aura obligatoirement la bonne regle.

