1. Répertoire d’installation:

    Spécifiez l’emplacement du répertoire d’installation de votre choix. Veremes recommande l’utilisation du répertoire C:\Serveurs\PostgreSQL.

2. Sélection des composants:

    L’assistant d’installation vous propose quatre composants (dans d’anciennes versions de l’installeur, par exemple PostgreSQL 9.X, cet écran peut intervenir plus tard voir être absent) :

    - PostgreSQL Server (le serveur PostgreSQL)
    - pgAdmin 4 (l’interface graphique via page web pour gérer vos bases de données)
    - Stack Builder (nécessaire à l’installation et l’activation d’extensions, comme PostGIS)
    - Command Line Tools (outils pour manipuler PostgreSQL avec une console de commande)

    Nous laissons ces quatre cases cochées pour la présente installation. Cliquez sur Suivant.

3. Répertoire d’installation des données (cluster)

    Ne modifiez pas l’emplacement proposé
    par défaut (ici C:\Serveurs\PostgreSQL[votre numéro de version]\data).
    Cliquez sur Suivant pour poursuivre l’installation.

4. Mot de passe:

    Indiquez ensuite, le mot de passe du super utilisateur postgres de la base de données.
    Il est conseillé d’utiliser un mot de passe fort si vous installez PostgreSQL dans un environnement de production.
    Il est indispensable de conserver ce mot de passe.


5. Port:

    Indiquez ensuite le numéro de port. Par défaut, il s’agit du 5432 (s’il est libre). Poursuivez en cliquant sur Suivant.

    Mot de passe:
    dbiaelflor123

    Port:
    5432

6. Options avancées:

    Vous pouvez sélectionner ici le nouveau cluster de bases de données. La locale par défaut utilisée ici convient à l’utilisation de vMap.

7. Stack build ==> Sélectionner les applications que vous voulez installer

    https://www.enterprisedb.com/docs/supported-open-source/postgresql/installer/03_using_stackbuilder/

8. Ouvrir pgAdmin 4

    Set Master Password:
    lnabiaflorcarladb18
