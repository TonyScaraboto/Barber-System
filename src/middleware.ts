import { clerkMiddleware, createRouteMatcher } from '@clerk/astro/server';
import { getUserRole } from './lib/types';

// Defina as rotas públicas (que não precisam de autenticação)
const isPublicRoute = createRouteMatcher([
  '/',
  '/login(.*)',
  '/cadastro(.*)',
  '/api/webhooks(.*)',
]);

const isClientRoute = createRouteMatcher([
  '/dashboard/client(.*)',
]);

const isBarbershopRoute = createRouteMatcher([
  '/dashboard/barbershop(.*)',
]);

export const onRequest = clerkMiddleware(async (auth, context) => {
  const { redirectToSignIn, userId } = auth();

  // Se não estiver autenticado e tentar acessar rota protegida, redireciona para login
  if (!userId && !isPublicRoute(context.request)) {
    return redirectToSignIn();
  }

  if (userId) {
    // Determina o role do usuário
    const userRole = getUserRole(userId);
    const targetDashboard = userRole === 'client' ? '/dashboard/client' : '/dashboard/barbershop';

    // Redireciona home, login, cadastro e dashboard genérico
    if (['/', '/login', '/cadastro', '/dashboard'].includes(context.url.pathname)) {
      return context.redirect(targetDashboard);
    }

    // Bloqueia acesso cruzado
    if (userRole === 'client' && isBarbershopRoute(context.request)) {
      return context.redirect('/dashboard/client');
    }
    if (userRole === 'barbershop' && isClientRoute(context.request)) {
      return context.redirect('/dashboard/barbershop');
    }
  }
});
