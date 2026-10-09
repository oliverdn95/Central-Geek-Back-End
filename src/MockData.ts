// MockData.ts
// Central Geek — dados fictícios para desenvolvimento do MVP.
//
// Escopo coberto:
// - Usuários: cadastro/login, perfil e proprietário dos anúncios.
// - Mangás: catálogo + dados mínimos para representar exemplares da coleção.
// - Listings: anúncios ativos, negociando, concluídos e cancelados.
// - Relacionamentos: Listing.userId -> User.id | Listing.mangaId -> Manga.id.
//
// Observação:
// A documentação do projeto separa Obra, Volume, Exemplar e Anúncio.
// Como este mock foi solicitado especificamente para Users, Mangas e Listings,
// a entidade Manga abaixo representa o item de catálogo/volume que será usado
// pelo frontend do MVP. Em uma implementação Prisma completa, isso pode ser
// normalizado posteriormente em manga_titles, manga_volumes e user_mangas.

export type UserRole = 'USER' | 'MODERATOR' | 'ADMIN' | 'SUPER_ADMIN';

export type MangaCondition =
  | 'NOVO'
  | 'COMO_NOVO'
  | 'BOM'
  | 'REGULAR'
  | 'RUIM';

export type ListingType =
  | 'TROCA'
  | 'EMPRESTIMO'
  | 'DOACAO'
  | 'DESAPEGO';

export type ListingStatus =
  | 'RASCUNHO'
  | 'ATIVO'
  | 'NEGOCIANDO'
  | 'CONCLUIDO'
  | 'CANCELADO'
  | 'EXPIRADO';

export interface User {
  id: string;
  email: string;
  username: string;
  passwordHash: string;
  role: UserRole;
  displayName: string;
  bio: string;
  avatarUrl: string;
  city: string;
  state: string;
  createdAt: string;
}

export interface Manga {
  id: string;
  title: string;
  volumeNumber: number;
  isbn: string;
  author: string;
  publisher: string;
  genre: string;
  synopsis: string;
  coverImageUrl: string;
  condition: MangaCondition;
  ownerId: string;
  notes?: string;
  createdAt: string;
}

export interface Listing {
  id: string;
  userId: string;
  mangaId: string;
  type: ListingType;
  status: ListingStatus;
  description: string;
  price: number | null;
  desiredItems: string[];
  city: string;
  state: string;
  createdAt: string;
  expiresAt: string | null;
}

// -----------------------------------------------------------------------------
// USERS
// -----------------------------------------------------------------------------

export const Users: User[] = [
  {
    id: 'user-001',
    email: 'rafael.silva@example.com',
    username: 'rafaelcolecionador',
    passwordHash: '$argon2id$v=19$MOCK_HASH_USER_001',
    role: 'USER',
    displayName: 'Rafael Silva',
    bio: 'Colecionador de mangás e fã de shonen. Procuro completar minhas coleções.',
    avatarUrl: 'https://i.pravatar.cc/150?img=12',
    city: 'São Paulo',
    state: 'SP',
    createdAt: '2026-09-01T14:30:00.000Z',
  },
  {
    id: 'user-002',
    email: 'marina.costa@example.com',
    username: 'marinaleitora',
    passwordHash: '$argon2id$v=19$MOCK_HASH_USER_002',
    role: 'USER',
    displayName: 'Marina Costa',
    bio: 'Leitora casual. Gosto de descobrir histórias novas e participar de doações.',
    avatarUrl: 'https://i.pravatar.cc/150?img=47',
    city: 'Campinas',
    state: 'SP',
    createdAt: '2026-09-03T10:15:00.000Z',
  },
  {
    id: 'user-003',
    email: 'diego.almeida@example.com',
    username: 'diego.geek',
    passwordHash: '$argon2id$v=19$MOCK_HASH_USER_003',
    role: 'USER',
    displayName: 'Diego Almeida',
    bio: 'Geek e colecionador. Tenho alguns volumes repetidos para trocar.',
    avatarUrl: 'https://i.pravatar.cc/150?img=33',
    city: 'Bauru',
    state: 'SP',
    createdAt: '2026-09-05T18:45:00.000Z',
  },
  {
    id: 'user-004',
    email: 'fernanda.souza@example.com',
    username: 'fernandadesapega',
    passwordHash: '$argon2id$v=19$MOCK_HASH_USER_004',
    role: 'USER',
    displayName: 'Fernanda Souza',
    bio: 'Ex-colecionadora liberando espaço na estante.',
    avatarUrl: 'https://i.pravatar.cc/150?img=44',
    city: 'Ribeirão Preto',
    state: 'SP',
    createdAt: '2026-09-07T09:20:00.000Z',
  },
  {
    id: 'user-005',
    email: 'lucas.mendes@example.com',
    username: 'lucasotaku',
    passwordHash: '$argon2id$v=19$MOCK_HASH_USER_005',
    role: 'USER',
    displayName: 'Lucas Mendes',
    bio: 'Fã de clássicos e seinen. Aberto a trocas por volumes que ainda não tenho.',
    avatarUrl: 'https://i.pravatar.cc/150?img=68',
    city: 'Curitiba',
    state: 'PR',
    createdAt: '2026-09-10T16:10:00.000Z',
  },
];

// -----------------------------------------------------------------------------
// MANGAS
// -----------------------------------------------------------------------------

export const Mangas: Manga[] = [
  {
    id: 'manga-001',
    title: 'One Piece',
    volumeNumber: 42,
    isbn: '9788573519870',
    author: 'Eiichiro Oda',
    publisher: 'Panini',
    genre: 'Shonen',
    synopsis: 'Luffy e sua tripulação continuam sua jornada em busca do One Piece.',
    coverImageUrl: 'https://placehold.co/300x450?text=One+Piece+42',
    condition: 'BOM',
    ownerId: 'user-001',
    notes: 'Pequenos sinais de uso na lombada.',
    createdAt: '2026-09-11T12:00:00.000Z',
  },
  {
    id: 'manga-002',
    title: 'Naruto',
    volumeNumber: 15,
    isbn: '9788577871233',
    author: 'Masashi Kishimoto',
    publisher: 'Panini',
    genre: 'Shonen',
    synopsis: 'Naruto e seus companheiros enfrentam novos desafios durante sua formação ninja.',
    coverImageUrl: 'https://placehold.co/300x450?text=Naruto+15',
    condition: 'COMO_NOVO',
    ownerId: 'user-002',
    createdAt: '2026-09-12T09:30:00.000Z',
  },
  {
    id: 'manga-003',
    title: 'Jujutsu Kaisen',
    volumeNumber: 8,
    isbn: '9786555123456',
    author: 'Gege Akutami',
    publisher: 'Panini',
    genre: 'Shonen',
    synopsis: 'Yuji e os feiticeiros continuam enfrentando maldições cada vez mais perigosas.',
    coverImageUrl: 'https://placehold.co/300x450?text=Jujutsu+Kaisen+8',
    condition: 'NOVO',
    ownerId: 'user-003',
    createdAt: '2026-09-13T15:00:00.000Z',
  },
  {
    id: 'manga-004',
    title: 'Death Note',
    volumeNumber: 3,
    isbn: '9788573515551',
    author: 'Tsugumi Ohba',
    publisher: 'JBC',
    genre: 'Seinen',
    synopsis: 'Light Yagami continua sua disputa intelectual enquanto L tenta descobrir sua identidade.',
    coverImageUrl: 'https://placehold.co/300x450?text=Death+Note+3',
    condition: 'BOM',
    ownerId: 'user-004',
    notes: 'Edição antiga, mas bem conservada.',
    createdAt: '2026-09-14T11:40:00.000Z',
  },
  {
    id: 'manga-005',
    title: 'Fullmetal Alchemist',
    volumeNumber: 10,
    isbn: '9788545701234',
    author: 'Hiromu Arakawa',
    publisher: 'JBC',
    genre: 'Shonen',
    synopsis: 'Os irmãos Elric avançam em sua busca pela Pedra Filosofal e pela verdade.',
    coverImageUrl: 'https://placehold.co/300x450?text=Fullmetal+Alchemist+10',
    condition: 'REGULAR',
    ownerId: 'user-005',
    notes: 'Algumas marcas externas de uso.',
    createdAt: '2026-09-15T17:25:00.000Z',
  },
  {
    id: 'manga-006',
    title: 'Attack on Titan',
    volumeNumber: 6,
    isbn: '9788545705670',
    author: 'Hajime Isayama',
    publisher: 'Panini',
    genre: 'Seinen',
    synopsis: 'A humanidade luta para sobreviver enquanto novos mistérios sobre os titãs surgem.',
    coverImageUrl: 'https://placehold.co/300x450?text=Attack+on+Titan+6',
    condition: 'COMO_NOVO',
    ownerId: 'user-001',
    createdAt: '2026-09-16T13:10:00.000Z',
  },
];

// -----------------------------------------------------------------------------
// LISTINGS
// -----------------------------------------------------------------------------

export const Listings: Listing[] = [
  {
    id: 'listing-001',
    userId: 'user-001',
    mangaId: 'manga-001',
    type: 'TROCA',
    status: 'ATIVO',
    description: 'Volume 42 de One Piece em bom estado. Procuro outro volume de One Piece que esteja faltando na minha coleção.',
    price: null,
    desiredItems: ['One Piece Vol. 35', 'One Piece Vol. 36', 'One Piece Vol. 43'],
    city: 'São Paulo',
    state: 'SP',
    createdAt: '2026-09-17T10:00:00.000Z',
    expiresAt: '2026-12-17T10:00:00.000Z',
  },
  {
    id: 'listing-002',
    userId: 'user-002',
    mangaId: 'manga-002',
    type: 'DOACAO',
    status: 'ATIVO',
    description: 'Doação de Naruto Vol. 15. Exemplar muito bem conservado e pronto para encontrar um novo leitor.',
    price: null,
    desiredItems: [],
    city: 'Campinas',
    state: 'SP',
    createdAt: '2026-09-18T14:20:00.000Z',
    expiresAt: null,
  },
  {
    id: 'listing-003',
    userId: 'user-003',
    mangaId: 'manga-003',
    type: 'EMPRESTIMO',
    status: 'NEGOCIANDO',
    description: 'Empréstimo de Jujutsu Kaisen Vol. 8 por até 30 dias. Retirada combinada em local público.',
    price: null,
    desiredItems: [],
    city: 'Bauru',
    state: 'SP',
    createdAt: '2026-09-19T16:45:00.000Z',
    expiresAt: '2026-11-19T16:45:00.000Z',
  },
  {
    id: 'listing-004',
    userId: 'user-004',
    mangaId: 'manga-004',
    type: 'DESAPEGO',
    status: 'ATIVO',
    description: 'Death Note Vol. 3 para desapego. Edição antiga, com sinais normais de uso, mas totalmente legível.',
    price: 18.9,
    desiredItems: [],
    city: 'Ribeirão Preto',
    state: 'SP',
    createdAt: '2026-09-20T08:15:00.000Z',
    expiresAt: null,
  },
  {
    id: 'listing-005',
    userId: 'user-005',
    mangaId: 'manga-005',
    type: 'TROCA',
    status: 'CONCLUIDO',
    description: 'Fullmetal Alchemist Vol. 10 que já foi negociado com outro usuário.',
    price: null,
    desiredItems: ['Fullmetal Alchemist Vol. 8', 'Fullmetal Alchemist Vol. 12'],
    city: 'Curitiba',
    state: 'PR',
    createdAt: '2026-09-21T11:30:00.000Z',
    expiresAt: null,
  },
  {
    id: 'listing-006',
    userId: 'user-001',
    mangaId: 'manga-006',
    type: 'DESAPEGO',
    status: 'CANCELADO',
    description: 'Anúncio cancelado pelo proprietário antes da conclusão da negociação.',
    price: 25,
    desiredItems: [],
    city: 'São Paulo',
    state: 'SP',
    createdAt: '2026-09-22T13:00:00.000Z',
    expiresAt: null,
  },
];

// -----------------------------------------------------------------------------
// HELPERS — úteis para telas e testes do MVP
// -----------------------------------------------------------------------------

export const getUserById = (userId: string) =>
  Users.find((user) => user.id === userId);

export const getMangaById = (mangaId: string) =>
  Mangas.find((manga) => manga.id === mangaId);

export const getListingById = (listingId: string) =>
  Listings.find((listing) => listing.id === listingId);

export const getActiveListings = () =>
  Listings.filter((listing) => listing.status === 'ATIVO');

export const getListingsByType = (type: ListingType) =>
  Listings.filter(
    (listing) => listing.type === type && listing.status === 'ATIVO'
  );

export const getListingsByUserId = (userId: string) =>
  Listings.filter((listing) => listing.userId === userId);

export const getListingDetails = (listingId: string) => {
  const listing = getListingById(listingId);

  if (!listing) return undefined;

  return {
    ...listing,
    user: getUserById(listing.userId),
    manga: getMangaById(listing.mangaId),
  };
};
