<form 
  name="aanvraag" 
  method="POST" 
  data-netlify="true" 
  onSubmit={handleSubmit} 
  className="space-y-6"
>
  {/* verplicht voor Netlify */}
  <input type="hidden" name="form-name" value="aanvraag" />

  {renderStep()}

  {/* voorbeeld dat jouw inputs name hebben */}
  {/* let op: dit moet je doen in al je stappen */}
  {/* Voorbeeld stap: */}
  {/* 
    <Input id="voornaam" name="voornaam" placeholder="Jan" required />
    <Input id="achternaam" name="achternaam" placeholder="Jansen" required />
    <Input id="email" name="email" type="email" placeholder="jan@voorbeeld.nl" required />
    <Textarea id="bericht" name="bericht" placeholder="Typ hier je aanvraag..." required />
  */}

  <div className="flex gap-4 pt-6">
    {currentStep > 1 && (
      <Button 
        type="button" 
        variant="outline" 
        onClick={() => setCurrentStep(currentStep - 1)}
        className="flex-1"
        disabled={isSubmitting}
      >
        Vorige
      </Button>
    )}
    <Button 
      type="submit" 
      disabled={!isStepValid() || isSubmitting}
      className="flex-1"
      variant={currentStep === totalSteps ? "default" : "default"}
    >
      {isSubmitting ? "Versturen..." : (currentStep === totalSteps ? "Naar betaling" : "Volgende")}
    </Button>
  </div>
</form>
