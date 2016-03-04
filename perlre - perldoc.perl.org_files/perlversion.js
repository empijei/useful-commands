// perlversion.js - writes Perl version drop-down menu

function selectPerlVersion(element) {
  if (element.value.substring(0,1) == '/') {
    location.href = element.value;
  }
}

document.write('<select id="perl_version_select" name="version-chooser" onChange="selectPerlVersion(this)">');
document.write('  <option selected>Select...');
document.write('  <optgroup label="Perl 5 version 22">');
document.write('    <option value="/index.html">Perl 5.22.0');
document.write('  </optgroup>');
document.write('  <optgroup label="Perl 5 version 20">');
document.write('    <option value="/5.20.2/index.html">Perl 5.20.2');
document.write('    <option value="/5.20.1/index.html">Perl 5.20.1');
document.write('    <option value="/5.20.0/index.html">Perl 5.20.0');
document.write('  </optgroup>');
document.write('  <optgroup label="Perl 5 version 18">');
document.write('    <option value="/5.18.2/index.html">Perl 5.18.2');
document.write('    <option value="/5.18.1/index.html">Perl 5.18.1');
document.write('    <option value="/5.18.0/index.html">Perl 5.18.0');
document.write('  </optgroup>');
document.write('  <optgroup label="Perl 5 version 16">');
document.write('    <option value="/5.16.2/index.html">Perl 5.16.2');
document.write('    <option value="/5.16.1/index.html">Perl 5.16.1');
document.write('    <option value="/5.16.0/index.html">Perl 5.16.0');
document.write('  </optgroup>');
document.write('  <optgroup label="Perl 5 version 14">');
document.write('    <option value="/5.14.2/index.html">Perl 5.14.2');
document.write('    <option value="/5.14.1/index.html">Perl 5.14.1');
document.write('    <option value="/5.14.0/index.html">Perl 5.14.0');
document.write('  </optgroup>');
document.write('  <optgroup label="Perl 5 version 12">');
document.write('    <option value="/5.12.4/index.html">Perl 5.12.4');
document.write('    <option value="/5.12.3/index.html">Perl 5.12.3');
document.write('    <option value="/5.12.2/index.html">Perl 5.12.2');
document.write('    <option value="/5.12.1/index.html">Perl 5.12.1');
document.write('    <option value="/5.12.0/index.html">Perl 5.12.0');
document.write('  </optgroup>');
document.write('  <optgroup label="Perl 5 version 10">');
document.write('    <option value="/5.10.1/index.html">Perl 5.10.1');
document.write('    <option value="/5.10.0/index.html">Perl 5.10.0');
document.write('  </optgroup>');
document.write('  <optgroup label="Perl 5 version 8">');
document.write('    <option value="/5.8.9/index.html">Perl 5.8.9');
document.write('    <option value="/5.8.8/index.html">Perl 5.8.8');
document.write('  </optgroup>');
document.write('</select>');
