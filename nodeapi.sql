PGDMP          %                w            nodeapi    11.5    11.5                  0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false            !           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false            "           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                       false            #           1262    16394    nodeapi    DATABASE     �   CREATE DATABASE nodeapi WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Portuguese_Brazil.1252' LC_CTYPE = 'Portuguese_Brazil.1252';
    DROP DATABASE nodeapi;
             mateus    false            �            1259    16475 	   immobiles    TABLE     :  CREATE TABLE public.immobiles (
    id integer NOT NULL,
    title text,
    description text,
    "offerType" text,
    "immobileType" text,
    value integer,
    "numberDormitory" integer,
    "hasGarage" boolean,
    city text,
    street text,
    "houseNumber" text,
    neighborhood text,
    state text
);
    DROP TABLE public.immobiles;
       public         mateus    false            �            1259    16498    immobilesPeoples    TABLE     x   CREATE TABLE public."immobilesPeoples" (
    id integer NOT NULL,
    "immobilesID" integer,
    "peoplesID" integer
);
 &   DROP TABLE public."immobilesPeoples";
       public         mateus    false            �            1259    16496    immobilesPeoples_id_seq    SEQUENCE     �   CREATE SEQUENCE public."immobilesPeoples_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public."immobilesPeoples_id_seq";
       public       mateus    false    203            $           0    0    immobilesPeoples_id_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public."immobilesPeoples_id_seq" OWNED BY public."immobilesPeoples".id;
            public       mateus    false    202            �            1259    16473    immobiles_id_seq    SEQUENCE     �   CREATE SEQUENCE public.immobiles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.immobiles_id_seq;
       public       mateus    false    201            %           0    0    immobiles_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.immobiles_id_seq OWNED BY public.immobiles.id;
            public       mateus    false    200            �            1259    16448    peoples    TABLE     �   CREATE TABLE public.peoples (
    id integer NOT NULL,
    name text,
    lastname text,
    cpf text,
    birthday text,
    phone text,
    street text,
    state text,
    city text,
    "userID" integer
);
    DROP TABLE public.peoples;
       public         mateus    false            �            1259    16451    peoples_id_seq    SEQUENCE     �   CREATE SEQUENCE public.peoples_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.peoples_id_seq;
       public       mateus    false    196            &           0    0    peoples_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.peoples_id_seq OWNED BY public.peoples.id;
            public       mateus    false    197            �            1259    16461    users    TABLE     i   CREATE TABLE public.users (
    id integer NOT NULL,
    name text,
    email text,
    password text
);
    DROP TABLE public.users;
       public         mateus    false            �            1259    16464    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public       mateus    false    198            '           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
            public       mateus    false    199            �
           2604    16478    immobiles id    DEFAULT     l   ALTER TABLE ONLY public.immobiles ALTER COLUMN id SET DEFAULT nextval('public.immobiles_id_seq'::regclass);
 ;   ALTER TABLE public.immobiles ALTER COLUMN id DROP DEFAULT;
       public       mateus    false    201    200    201            �
           2604    16501    immobilesPeoples id    DEFAULT     ~   ALTER TABLE ONLY public."immobilesPeoples" ALTER COLUMN id SET DEFAULT nextval('public."immobilesPeoples_id_seq"'::regclass);
 D   ALTER TABLE public."immobilesPeoples" ALTER COLUMN id DROP DEFAULT;
       public       mateus    false    203    202    203            �
           2604    16453 
   peoples id    DEFAULT     h   ALTER TABLE ONLY public.peoples ALTER COLUMN id SET DEFAULT nextval('public.peoples_id_seq'::regclass);
 9   ALTER TABLE public.peoples ALTER COLUMN id DROP DEFAULT;
       public       mateus    false    197    196            �
           2604    16466    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public       mateus    false    199    198                      0    16475 	   immobiles 
   TABLE DATA               �   COPY public.immobiles (id, title, description, "offerType", "immobileType", value, "numberDormitory", "hasGarage", city, street, "houseNumber", neighborhood, state) FROM stdin;
    public       mateus    false    201   K!                 0    16498    immobilesPeoples 
   TABLE DATA               L   COPY public."immobilesPeoples" (id, "immobilesID", "peoplesID") FROM stdin;
    public       mateus    false    203   �!                 0    16448    peoples 
   TABLE DATA               j   COPY public.peoples (id, name, lastname, cpf, birthday, phone, street, state, city, "userID") FROM stdin;
    public       mateus    false    196   �!                 0    16461    users 
   TABLE DATA               :   COPY public.users (id, name, email, password) FROM stdin;
    public       mateus    false    198   w"       (           0    0    immobilesPeoples_id_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public."immobilesPeoples_id_seq"', 23, true);
            public       mateus    false    202            )           0    0    immobiles_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.immobiles_id_seq', 31, true);
            public       mateus    false    200            *           0    0    peoples_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.peoples_id_seq', 13, true);
            public       mateus    false    197            +           0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 26, true);
            public       mateus    false    199            �
           2606    16489    users id 
   CONSTRAINT     S   ALTER TABLE ONLY public.users
    ADD CONSTRAINT id PRIMARY KEY (id) INCLUDE (id);
 2   ALTER TABLE ONLY public.users DROP CONSTRAINT id;
       public         mateus    false    198    198            �
           2606    16503 &   immobilesPeoples immobilesPeoples_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public."immobilesPeoples"
    ADD CONSTRAINT "immobilesPeoples_pkey" PRIMARY KEY (id);
 T   ALTER TABLE ONLY public."immobilesPeoples" DROP CONSTRAINT "immobilesPeoples_pkey";
       public         mateus    false    203            �
           2606    16483    immobiles immobiles_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.immobiles
    ADD CONSTRAINT immobiles_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.immobiles DROP CONSTRAINT immobiles_pkey;
       public         mateus    false    201            �
           1259    16495 
   fki_userid    INDEX     <   CREATE INDEX fki_userid ON public.peoples USING btree (id);
    DROP INDEX public.fki_userid;
       public         mateus    false    196               f   x�U�1
�0��9=ENPԂ���SW'��m4����������4��)˷q������i��m�2�!J�l8�E��q�CL��a(V��pb����s/�N'            x�32�46�44�223��b���� (�9         {   x��̱�0 ��=EJ(p���TTn"��y�/,�#��B��b,@�p!ˮG��5-M�%�	��K����x�)1�(�S�!��C���]!�*}�i��ayh{~�u-��L/�������n�1_RJ5�         i   x�32��M,I--��S��E��E�e鹉�9z����*F�*�*)a�^i%�~�z�ቅQ�����z��)%�A��F���^U�&����\1z\\\ �0      