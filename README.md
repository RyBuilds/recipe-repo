<Index>
<BrowserRouter>
    <App>
    <Layout>
      <MainNavigation>
        <Link>All Recipes</Link>
        <Link>Quick Recipes</Link>
        <Link>Add New Recipe</Link>
        <SearchBar></SearchBar>
      </MainNavigation>
      <Switch>
        <Route>
          <AllRecipesPage>
            <RecipeItem>
                <Card>
                    <Props>
                </Card>
            </RecipeItem>
          </AllRecipesPage>
        </Route>
        <Route>
          <FullRecipe>
          </FullRecipe>
        </Route>
        <Route>
          <QuickRecipesPage>
          </QuickRecipesPage>
        </Route>
        <Route>
          <NewRecipePage>
            <NewRecipeForm>
                <FormCard>
                    <IngredientForm>
                    <IngredientForm>
                </FormCard>
            </NewRecipeForm>
          </NewRecipePage>
        </Route>
      </Switch>
    </Layout>
    </App>
</BrowserRouter>

<RecipeContext.Provider>

paginating
