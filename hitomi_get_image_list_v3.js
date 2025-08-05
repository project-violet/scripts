// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

const domain2 = 'gold-usergeneratedcontent.net';

function create_download_url(id) {
  return "https://ltn.gold-usergeneratedcontent.net/galleries/" + id + ".js";
}

function gg_s(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); }

var gg = {};
var window = {};
var document = {};
var name = {};
var location = {};
var customElements = {};
var history = {};
var locationbar = {};
var menubar = {};
var personalbar = {};
var scrollbars = {};
var statusbar = {};
var toolbar = {};
var status = {};
var closed = {};
var frames = {};
var length = {};
var top = {};
var opener = {};
var parent = {};
var frameElement = {};
var navigator = {};
var origin = {};
var external = {};
var screen = {};
var innerWidth = {};
var innerHeight = {};
var scrollX = {};
var pageXOffset = {};
var scrollY = {};
var pageYOffset = {};
var visualViewport = {};
var screenX = {};
var screenY = {};
var outerWidth = {};
var outerHeight = {};
var devicePixelRatio = {};
var clientInformation = {};
var screenLeft = {};
var screenTop = {};
var defaultStatus = {};
var defaultstatus = {};
var styleMedia = {};
var onsearch = {};
var isSecureContext = {};
var performance = {};
var onappinstalled = {};
var onbeforeinstallprompt = {};
var crypto = {};
var indexedDB = {};
var webkitStorageInfo = {};
var sessionStorage = {};
var localStorage = {};
var onbeforexrselect = {};
var onabort = {};
var onblur = {};
var oncancel = {};
var oncanplay = {};
var oncanplaythrough = {};
var onchange = {};
var onclick = {};
var onclose = {};
var oncontextmenu = {};
var oncuechange = {};
var ondblclick = {};
var ondrag = {};
var ondragend = {};
var ondragenter = {};
var ondragleave = {};
var ondragover = {};
var ondragstart = {};
var ondrop = {};
var ondurationchange = {};
var onemptied = {};
var onended = {};
var onerror = {};
var onfocus = {};
var onformdata = {};
var oninput = {};
var oninvalid = {};
var onkeydown = {};
var onkeypress = {};
var onkeyup = {};
var onload = {};
var onloadeddata = {};
var onloadedmetadata = {};
var onloadstart = {};
var onmousedown = {};
var onmouseenter = {};
var onmouseleave = {};
var onmousemove = {};
var onmouseout = {};
var onmouseover = {};
var onmouseup = {};
var onmousewheel = {};
var onpause = {};
var onplay = {};
var onplaying = {};
var onprogress = {};
var onratechange = {};
var onreset = {};
var onresize = {};
var onscroll = {};
var onseeked = {};
var onseeking = {};
var onselect = {};
var onstalled = {};
var onsubmit = {};
var onsuspend = {};
var ontimeupdate = {};
var ontoggle = {};
var onvolumechange = {};
var onwaiting = {};
var onwebkitanimationend = {};
var onwebkitanimationiteration = {};
var onwebkitanimationstart = {};
var onwebkittransitionend = {};
var onwheel = {};
var onauxclick = {};
var ongotpointercapture = {};
var onlostpointercapture = {};
var onpointerdown = {};
var onpointermove = {};
var onpointerup = {};
var onpointercancel = {};
var onpointerover = {};
var onpointerout = {};
var onpointerenter = {};
var onpointerleave = {};
var onselectstart = {};
var onselectionchange = {};
var onanimationend = {};
var onanimationiteration = {};
var onanimationstart = {};
var ontransitionrun = {};
var ontransitionstart = {};
var ontransitionend = {};
var ontransitioncancel = {};
var onafterprint = {};
var onbeforeprint = {};
var onbeforeunload = {};
var onhashchange = {};
var onlanguagechange = {};
var onmessage = {};
var onmessageerror = {};
var onoffline = {};
var ononline = {};
var onpagehide = {};
var onpageshow = {};
var onpopstate = {};
var onrejectionhandled = {};
var onstorage = {};
var onunhandledrejection = {};
var onunload = {};
var alert = {};
var atob = {};
var blur = {};
var btoa = {};
var cancelAnimationFrame = {};
var cancelIdleCallback = {};
var captureEvents = {};
var clearInterval = {};
var clearTimeout = {};
var close = {};
var confirm = {};
var createImageBitmap = {};
var fetch = {};
var find = {};
var focus = {};
var getComputedStyle = {};
var getSelection = {};
var matchMedia = {};
var moveBy = {};
var moveTo = {};
var open = {};
var postMessage = {};
var print = {};
var prompt = {};
var queueMicrotask = {};
var releaseEvents = {};
var reportError = {};
var requestAnimationFrame = {};
var requestIdleCallback = {};
var resizeBy = {};
var resizeTo = {};
var scroll = {};
var scrollBy = {};
var scrollTo = {};
var setInterval = {};
var setTimeout = {};
var stop = {};
var webkitCancelAnimationFrame = {};
var webkitRequestAnimationFrame = {};
var chrome = {};
var caches = {};
var cookieStore = {};
var ondevicemotion = {};
var ondeviceorientation = {};
var ondeviceorientationabsolute = {};
var showDirectoryPicker = {};
var showOpenFilePicker = {};
var showSaveFilePicker = {};
var originAgentCluster = {};
var trustedTypes = {};
var speechSynthesis = {};
var onpointerrawupdate = {};
var crossOriginIsolated = {};
var scheduler = {};
var openDatabase = {};
var webkitRequestFileSystem = {};
var webkitResolveLocalFileSystemURL = {};
var cr = {};


gg = { m: function(g) {
var o = 0;
switch (g) {
case 2953:
case 3001:
case 3473:
case 3992:
case 995:
case 1153:
case 681:
case 2679:
case 207:
case 3113:
case 3669:
case 306:
case 3067:
case 1488:
case 1590:
case 2436:
case 1898:
case 1831:
case 2077:
case 3519:
case 460:
case 4009:
case 2362:
case 850:
case 3372:
case 3166:
case 4040:
case 2239:
case 818:
case 564:
case 1976:
case 2641:
case 3851:
case 1297:
case 21:
case 1864:
case 2416:
case 3244:
case 791:
case 3133:
case 2945:
case 3599:
case 1462:
case 1510:
case 737:
case 1525:
case 2250:
case 3356:
case 3193:
case 123:
case 1924:
case 2299:
case 3912:
case 3858:
case 1041:
case 604:
case 167:
case 1079:
case 2886:
case 3105:
case 1204:
case 1891:
case 1217:
case 3008:
case 432:
case 1336:
case 2285:
case 1919:
case 336:
case 3673:
case 237:
case 1688:
case 508:
case 2764:
case 2081:
case 1096:
case 3774:
case 2479:
case 3301:
case 3959:
case 4042:
case 3370:
case 3266:
case 828:
case 2441:
case 2360:
case 2276:
case 953:
case 1939:
case 3628:
case 3576:
case 3144:
case 2875:
case 3233:
case 2616:
case 573:
case 2731:
case 1950:
case 1460:
case 2738:
case 3293:
case 2150:
case 2199:
case 113:
case 3552:
case 1999:
case 2224:
case 707:
case 293:
case 3910:
case 2593:
case 315:
case 2696:
case 58:
case 71:
case 1681:
case 1532:
case 291:
case 1985:
case 3806:
case 2505:
case 1379:
case 1063:
case 1787:
case 2720:
case 996:
case 3882:
case 3834:
case 1163:
case 2508:
case 2800:
case 412:
case 1279:
case 2849:
case 1004:
case 2936:
case 103:
case 2352:
case 14:
case 2099:
case 3393:
case 3814:
case 1037:
case 1241:
case 2871:
case 1854:
case 2324:
case 2050:
case 1116:
case 380:
case 2445:
case 1962:
case 23:
case 2162:
case 2376:
case 838:
case 3921:
case 2039:
case 3333:
case 2570:
case 4074:
case 1097:
case 1196:
case 184:
case 2181:
case 550:
case 788:
case 518:
case 3267:
case 2996:
case 3742:
case 2604:
case 1847:
case 256:
case 970:
case 3894:
case 357:
case 2617:
case 3432:
case 2789:
case 261:
case 3630:
case 1685:
case 3588:
case 3108:
case 1304:
case 2653:
case 335:
case 1179:
case 2385:
case 422:
case 2288:
case 614:
case 763:
case 1317:
case 3459:
case 1528:
case 2941:
case 3256:
case 2887:
case 2350:
case 88:
case 727:
case 1141:
case 1439:
case 490:
case 1337:
case 677:
case 761:
case 1749:
case 2556:
case 3855:
case 756:
case 1216:
case 2052:
case 274:
case 1045:
case 1450:
case 1723:
case 3272:
case 3170:
case 139:
case 2437:
case 3066:
case 2076:
case 20:
case 1499:
case 3344:
case 1889:
case 3562:
case 1624:
case 2572:
case 243:
case 3410:
case 476:
case 1148:
case 844:
case 316:
case 3783:
case 769:
case 3740:
case 9:
case 3167:
case 1485:
case 3101:
case 3581:
case 873:
case 3684:
case 1053:
case 3632:
case 1282:
case 657:
case 2943:
case 1549:
case 1927:
case 212:
case 1728:
case 3091:
case 3038:
case 3902:
case 3222:
case 3120:
case 4050:
case 1058:
case 565:
case 1261:
case 3788:
case 3018:
case 1207:
case 3475:
case 120:
case 859:
case 1571:
case 2955:
case 2465:
case 2283:
case 2074:
case 3011:
case 3064:
case 928:
case 2142:
case 4039:
case 1626:
case 3346:
case 672:
case 1268:
case 3848:
case 461:
case 4019:
case 324:
case 1721:
case 3686:
case 3031:
case 3762:
case 456:
case 254:
case 1294:
case 2406:
case 1129:
case 790:
case 2547:
case 3338:
case 1280:
case 3235:
case 1182:
case 1134:
case 1502:
case 1243:
case 2934:
case 2873:
case 2535:
case 3900:
case 3949:
case 596:
case 2914:
case 4052:
case 545:
case 3122:
case 1856:
case 1114:
case 3318:
case 1587:
case 3154:
case 488:
case 1107:
case 2520:
case 290:
case 1769:
case 4024:
case 1358:
case 754:
case 2515:
case 158:
case 110:
case 1474:
case 3816:
case 1351:
case 276:
case 1426:
case 918:
case 1065:
case 2821:
case 582:
case 2503:
case 377:
case 2109:
case 4076:
case 2242:
case 2767:
case 3203:
case 3046:
case 3978:
case 2968:
case 2458:
case 2701:
case 3364:
case 3542:
case 474:
case 2374:
case 1168:
case 314:
case 2595:
case 2770:
case 3398:
case 3295:
case 2994:
case 635:
case 1094:
case 4077:
case 2443:
case 2634:
case 944:
case 1427:
case 2890:
case 775:
case 2480:
case 37:
case 2531:
case 625:
case 3649:
case 2859:
case 304:
case 3395:
case 3402:
case 2733:
case 2564:
case 348:
case 4060:
case 1068:
case 3897:
case 2614:
case 1251:
case 1792:
case 3389:
case 2274:
case 41:
case 2713:
case 702:
case 3264:
case 971:
case 2040:
case 2009:
case 260:
case 2455:
case 3218:
case 1442:
case 3315:
case 3054:
case 1609:
case 3320:
case 2226:
case 1640:
case 3022:
case 2518:
case 2810:
case 2825:
case 3837:
case 3526:
case 3678:
case 1732:
case 232:
case 3623:
case 2327:
case 979:
case 3291:
case 455:
case 3804:
case 3238:
case 1712:
case 2429:
case 1082:
case 2694:
case 2830:
case 381:
case 740:
case 559:
case 1627:
case 3095:
case 2643:
case 3853:
case 2482:
case 437:
case 870:
case 3400:
case 3449:
case 3687:
case 4062:
case 1575:
case 3246:
case 3003:
case 595:
case 3471:
case 2340:
case 1151:
case 1790:
case 368:
case 732:
case 3719:
case 3164:
case 3111:
case 1368:
case 240:
case 1759:
case 1974:
case 1055:
case 1314:
case 1926:
case 1440:
case 2126:
case 1893:
case 3322:
case 2468:
case 2958:
case 3020:
case 1730:
case 1158:
case 896:
case 3986:
case 1334:
case 1710:
case 3035:
case 2629:
case 202:
case 1725:
case 1206:
case 2494:
case 224:
case 1594:
case 1223:
case 1691:
case 2098:
case 2686:
case 2247:
case 2762:
case 1638:
case 3406:
case 2195:
case 3929:
case 1995:
case 2781:
case 1618:
case 2011:
case 2064:
case 3074:
case 2346:
case 1860:
case 1568:
case 3240:
case 752:
case 669:
case 958:
case 4044:
case 1375:
case 2509:
case 298:
case 1187:
case 1507:
case 2222:
case 663:
case 2120:
case 118:
case 2115:
case 150:
case 714:
case 1271:
case 1763:
case 2841:
case 3522:
case 472:
case 2018:
case 2788:
case 1611:
case 3955:
case 1561:
case 2475:
case 3756:
case 656:
case 4057:
case 3127:
case 661:
case 312:
case 1935:
case 405:
case 1582:
case 3869:
case 1200:
case 1534:
case 627:
case 1249:
case 2879:
case 2902:
case 1631:
case 1086:
case 1716:
case 509:
case 1698:
case 1491:
case 1881:
case 1123:
case 56:
case 214:
case 3595:
case 2147:
case 798:
case 1529:
case 992:
case 533:
case 2398:
case 416:
case 4013:
case 3503:
case 3183:
case 376:
case 1418:
case 3242:
case 3767:
case 4066:
case 3458:
case 4033:
case 2203:
case 3374:
case 2289:
case 813:
case 1287:
case 1555:
case 2971:
case 3914:
case 3708:
case 3451:
case 724:
case 60:
case 2215:
case 643:
case 390:
case 3520:
case 2816:
case 1954:
case 1411:
case 3907:
case 2391:
case 3227:
case 1386:
case 3982:
case 986:
case 3873:
case 3934:
case 2863:
case 1431:
case 435:
case 3535:
case 1580:
case 1888:
case 2836:
case 617:
case 1202:
case 252:
case 2949:
case 1543:
case 2900:
case 607:
case 1000:
case 768:
case 332:
case 1049:
case 3793:
case 2804:
case 1286:
case 884:
case 4008:
case 2335:
case 529:
case 2752:
case 2817:
case 3906:
case 2724:
case 1495:
case 3830:
case 1885:
case 3538:
case 2054:
case 2315:
case 138:
case 1387:
case 1403:
case 61:
case 2837:
case 2526:
case 1071:
case 809:
case 289:
case 1622:
case 2574:
case 1839:
case 3342:
case 4070:
case 3511:
case 1946:
case 567:
case 1078:
case 84:
case 3614:
case 2264:
case 3083:
case 1654:
case 1175:
case 3713:
case 3965:
case 360:
case 3455:
case 930:
case 2975:
case 801:
case 3682:
case 878:
case 3443:
case 27:
case 406:
case 3480:
case 1435:
case 3598:
case 3859:
case 2600:
case 1023:
case 2402:
case 2298:
case 3733:
case 523:
case 2231:
case 1991:
case 1002:
case 2750:
case 2191:
case 2138:
case 942:
case 144:
case 2035:
case 3027:
case 1695:
case 3494:
case 637:
case 1300:
case 1737:
case 3629:
case 302:
case 2118:
case 839:
case 1371:
case 375:
case 1918:
case 1704:
case 1852:
case 3958:
case 2020:
case 1603:
case 1087:
case 2478:
case 62:
case 171:
case 2785:
case 2354:
case 1689:
case 1565:
case 3340:
case 547:
case 900:
case 3414:
case 1876:
case 3461:
case 2246:
case 3951:
case 3383:
case 1422:
case 2089:
case 1615:
case 693:
case 1378:
case 2164:
case 781:
case 511:
case 3042:
case 1911:
case 2347:
case 3680:
case 1635:
case 2739:
case 3482:
case 3434:
case 1797:
case 436:
case 2602:
case 1931:
case 1998:
case 783:
case 2131:
case 2449:
case 2198:
case 831:
case 2400:
case 1517:
case 225:
case 1373:
case 1905:
case 166:
case 886:
case 3496:
case 3886:
case 1601:
case 2984:
case 3557:
case 1184:
case 3285:
case 1504:
case 1993:
case 153:
case 1472:
case 736:
case 2599:
case 2356:
case 4022:
case 2193:
case 3250:
case 483:
case 1826:
case 1210:
case 1225:
case 2858:
case 2550:
case 1328:
case 2372:
case 2166:
case 3176:
case 31:
case 1456:
case 1933:
case 1874:
case 159:
case 820:
case 2133:
case 2428:
case 2992:
case 947:
case 3463:
case 1608:
case 500:
case 3953:
case 1192:
case 3219:
case 2669:
case 911:
case 206:
case 307:
case 1259:
case 3077:
case 2067:
case 3904:
case 1467:
case 3088:
case 2157:
case 4035:
case 2308:
case 391:
case 2930:
case 1401:
case 3917:
case 1369:
case 3505:
case 1232:
case 3185:
case 562:
case 640:
case 3791:
case 929:
case 2524:
case 3738:
case 2293:
case 4020:
case 2925:
case 3937:
case 3224:
case 3360:
case 3276:
case 1656:
case 2266:
case 3533:
case 32:
case 810:
case 675:
case 3566:
case 2144:
case 4089:
case 3062:
case 3616:
case 2233:
case 2072:
case 3377:
case 3513:
case 602:
case 3119:
case 3663:
case 967:
case 1190:
case 1292:
case 2213:
case 1159:
case 3636:
case 921:
case 3764:
case 2469:
case 4095:
case 226:
case 3501:
case 3823:
case 165:
case 1405:
case 1059:
case 327:
case 3277:
case 2267:
case 2742:
case 2894:
case 520:
case 356:
case 931:
case 361:
case 612:
case 2577:
case 2313:
case 1121:
case 1883:
case 33:
case 1972:
case 735:
case 96:
case 2366:
case 2333:
case 363:
case 933:
case 4064:
case 3878:
case 1729:
case 2156:
case 3099:
case 369:
case 939:
case 1466:
case 1025:
case 716:
case 2814:
case 3697:
case 3324:
case 1644:
case 3445:
case 498:
case 2928:
case 3050:
case 4091:
case 997:
case 1579:
case 4038:
case 1030:
case 842:
case 2690:
case 205:
case 3849:
case 1755:
case 2057:
case 1413:
case 2783:
case 1457:
case 3319:
case 3404:
case 216:
case 1390:
case 3281:
case 2740:
case 145:
case 1605:
case 2709:
case 2581:
case 558:
case 2101:
case 1596:
case 341:
case 2632:
case 1901:
case 1359:
case 622:
case 3417:
case 1768:
case 414:
case 1221:
case 1970:
case 374:
case 1693:
case 3262:
case 3160:
case 4046:
case 2272:
case 1842:
case 3076:
case 1794:
case 3948:
case 2066:
case 2425:
case 3437:
case 2612:
case 705:
case 2410:
case 830:
case 2562:
case 30:
case 477:
case 2344:
case 1666:
case 3941:
case 3887:
case 3497:
case 349:
case 3645:
case 1228:
case 676:
case 3556:
case 1325:
case 1633:
case 1310:
case 3399:
case 2357:
case 862:
case 2588:
case 2880:
case 984:
case 182:
case 1714:
case 1761:
case 235:
case 1908:
case 2843:
case 3288:
case 1330:
case 3385:
case 3754:
case 1707:
case 1613:
case 2005:
case 2459:
case 2969:
case 1563:
case 1720:
case 3579:
case 1963:
case 3:
case 2569:
case 2163:
case 1715:
case 3030:
case 2619:
case 687:
case 1508:
case 3269:
case 3384:
case 2004:
case 2988:
case 1936:
case 3010:
case 3780:
case 24:
case 169:
case 2822:
case 2476:
case 3743:
case 2241:
case 848:
case 524:
case 3466:
case 1871:
case 889:
case 2854:
case 1324:
case 4058:
case 1916:
case 3433:
case 3312:
case 2116:
case 1445:
case 4051:
case 3883:
case 3972:
case 3493:
case 1376:
case 3809:
case 2650:
case 2699:
case 163:
case 1039:
case 650:
case 1878:
case 1570:
case 1637:
case 2097:
case 127:
case 2196:
case 3059:
case 284:
case 3392:
case 935:
case 598:
case 1604:
case 2847:
case 156:
case 881:
case 1617:
case 1703:
case 1019:
case 1567:
case 834:
case 2835:
case 3827:
case 2304:
case 1653:
case 3908:
case 3714:
case 3761:
case 2263:
case 2179:
case 3613:
case 3707:
case 1385:
case 1754:
case 1802:
case 2236:
case 709:
case 3563:
case 1979:
case 2573:
case 694:
case 370:
case 2528:
case 3666:
case 514:
case 784:
case 3516:
case 26:
case 2815:
case 3325:
case 1556:
case 1399:
case 3310:
case 1052:
case 972:
case 3221:
case 3970:
case 174:
case 2045:
case 778:
case 2652:
case 1747:
case 239:
case 980:
case 1948:
case 552:
case 3794:
case 1076:
case 10:
case 4065:
case 2624:
case 143:
case 3390:
case 117:
case 3967:
case 2296:
case 1319:
case 396:
case 703:
case 3605:
case 74:
case 297:
case 2895:
case 141:
case 3596:
case 905:
case 3768:
case 2053:
case 1953:
case 1463:
case 1219:
case 3290:
case 3192:
case 1381:
case 2775:
case 3765:
case 3913:
case 2488:
case 1436:
case 2898:
case 713:
case 583:
case 229:
case 1176:
case 29:
case 1239:
case 747:
case 1641:
case 3966:
case 11:
case 3321:
case 711:
case 2864:
case 2145:
case 1416:
case 3597:
case 1060:
case 1945:
case 4014:
case 2952:
case 2462:
case 57:
case 3670:
case 2525:
case 1250:
case 95:
case 3112:
case 2316:
case 2924:
case 1299:
case 400:
case 2237:
case 2041:
case 3905:
case 936:
case 1886:
case 2838:
case 2530:
case 351:
case 1496:
case 548:
case 3667:
case 2481:
case 824:
case 2217:
case 155:
case 2336:
case 3504:
case 3230:
case 1557:
case 1377:
case 2919:
case 3190:
case 3751:
case 925:
case 1119:
case 1764:
case 3159:
case 852:
case 2096:
case 723:
case 644:
case 2592:
case 1139:
case 1441:
case 2846:
case 1360:
case 3545:
case 219:
case 12:
case 608:
case 767:
case 721:
case 1566:
case 1798:
case 3944:
case 1616:
case 534:
case 2950:
case 2460:
case 2016:
case 2662:
case 2786:
case 430:
case 1252:
case 1791:
case 1448:
case 3110:
case 213:
case 3212:
case 3125:
case 1224:
case 4055:
case 2477:
case 3467:
case 1088:
case 2036:
case 1718:
case 814:
case 729:
case 79:
case 2532:
case 247:
case 2104:
case 3232:
case 906:
case 1505:
case 3284:
case 3369:
case 2063:
case 1917:
case 2094:
case 242:
case 1766:
case 1598:
case 2427:
case 3819:
case 1531:
case 3023:
case 666:
case 1859:
case 730:
case 805:
case 651:
case 1733:
case 1564:
case 1511:
case 872:
case 3415:
case 3753:
case 3420:
case 1661:
case 3078:
case 2792:
case 3946:
case 1607:
case 3175:
case 3654:
case 2844:
case 2165:
case 880:
case 4048:
case 1040:
case 429:
case 968:
case 659:
case 2442:
case 200:
case 2609:
case 1705:
case 2640:
case 3489:
case 2258:
case 3071:
case 1668:
case 2355:
case 2014:
case 3403:
case 2732:
case 285:
case 3049:
case 421:
case 132:
case 3000:
case 3286:
case 3647:
case 1793:
case 826:
case 2712:
case 2082:
case 1906:
case 3885:
case 467:
case 1538:
case 3495:
case 3635:
case 835:
case 1643:
case 2029:
case 1434:
case 3323:
case 3998:
case 1744:
case 2394:
case 695:
case 1309:
case 2575:
case 515:
case 2151:
case 2790:
case 3378:
case 1655:
case 1174:
case 2368:
case 140:
case 3275:
case 1546:
case 3911:
case 3964:
case 1407:
case 1042:
case 2974:
case 2055:
case 2926:
case 175:
case 3371:
case 413:
case 1126:
case 2642:
case 3852:
case 989:
case 742:
case 2483:
case 1812:
case 230:
case 1468:
case 3087:
case 3689:
case 2307:
case 2730:
case 3824:
case 3938:
case 3002:
case 3447:
case 411:
case 3186:
case 2805:
case 344:
case 3506:
case 816:
case 2382:
case 447:
case 55:
case 2080:
case 1629:
case 3737:
case 3300:
case 2206:
case 2234:
case 2808:
case 2927:
case 1980:
case 112:
case 914:
case 2728:
case 2306:
case 3534:
case 3200:
case 3102:
case 665:
case 3582:
case 3716:
case 3086:
case 3507:
case 1554:
case 3920:
case 3763:
case 2261:
case 350:
case 526:
case 3446:
case 3664:
case 3736:
case 4037:
case 2155:
case 2207:
case 1522:
case 220:
case 44:
case 403:
case 1283:
case 3618:
case 2578:
case 2626:
case 3989:
case 2051:
case 3278:
case 3903:
case 505:
case 2365:
case 1658:
case 286:
case 572:
case 3594:
case 3638:
case 1772:
case 3691:
case 154:
case 952:
case 1406:
case 2294:
case 2801:
case 580:
case 710:
case 2129:
case 3995:
case 1547:
case 1227:
case 122:
case 1982:
case 3498:
case 1535:
case 3888:
case 3149:
case 3431:
case 696:
case 645:
case 1451:
case 1708:
case 1326:
case 2856:
case 3646:
case 2161:
case 3171:
case 2587:
case 46:
case 1828:
case 3779:
case 190:
case 2769:
case 2358:
case 3464:
case 258:
case 2474:
case 176:
case 2351:
case 2426:
case 535:
case 1183:
case 2940:
case 1503:
case 998:
case 1767:
case 2872:
case 439:
case 1968:
case 1701:
case 4045:
case 1374:
case 3438:
case 4053:
case 3491:
case 3529:
case 815:
case 497:
case 682:
case 2229:
case 78:
case 1623:
case 51:
case 2000:
case 264:
case 2049:
case 1804:
case 1238:
case 2286:
case 1335:
case 1291:
case 1817:
case 3586:
case 2495:
case 3106:
case 856:
case 238:
case 3007:
case 3442:
case 1218:
case 2558:
case 779:
case 1320:
case 2387:
case 629:
case 1022:
case 2489:
case 69:
case 3014:
case 2403:
case 3061:
case 507:
case 3258:
case 2071:
case 1574:
case 2622:
case 189:
case 148:
case 2415:
case 1146:
case 3251:
case 1671:
case 2420:
case 459:
case 3068:
case 2753:
case 1264:
case 2654:
case 342:
case 2435:
case 3427:
case 104:
case 771:
case 667:
case 708:
case 3329:
case 1402:
case 1298:
case 2991:
case 2447:
case 599:
case 2002:
case 1423:
case 2506:
case 1138:
case 3805:
case 446:
case 1035:
case 2695:
case 3206:
case 2349:
case 537:
case 2371:
case 3926:
case 3361:
case 3409:
case 3055:
case 3483:
case 1322:
case 2704:
case 2603:
case 843:
case 2087:
case 960:
case 80:
case 271:
case 4028:
case 1354:
case 208:
case 2689:
case 849:
case 1471:
case 2876:
case 1246:
case 1719:
case 1089:
case 2615:
case 3151:
case 3790:
case 2275:
case 2378:
case 3265:
case 3833:
case 591:
case 279:
case 1347:
case 2635:
case 1739:
case 3627:
case 2323:
case 738:
case 611:
case 3029:
case 134:
case 1602:
case 593:
case 124:
case 3721:
case 2594:
case 287:
case 3867:
case 569:
case 1247:
case 2877:
case 3523:
case 4059:
case 3129:
case 2995:
case 601:
case 2618:
case 1011:
case 2860:
case 2568:
case 3870:
case 3626:
case 2989:
case 3365:
case 1540:
case 1189:
case 3268:
case 2375:
case 1509:
case 609:
case 2187:
case 1222:
case 2507:
case 1120:
case 794:
case 2446:
case 218:
case 3261:
case 3773:
case 250:
case 2920:
case 1841:
case 3674:
case 3155:
case 1254:
case 2611:
case 3571:
case 2514:
case 556:
case 1475:
case 392:
case 3234:
case 3808:
case 1135:
case 3180:
case 3282:
case 2935:
case 3143:
case 684:
case 2582:
case 2200:
case 2534:
case 2102:
case 2249:
case 3306:
case 1879:
case 1902:
case 2086:
case 563:
case 4:
case 1038:
case 2698:
case 2491:
case 588:
case 631:
case 2947:
case 2881:
case 4092:
case 750:
case 114:
case 912:
case 2438:
case 1896:
case 1331:
case 3229:
case 891:
case 3909:
case 3872:
case 2862:
case 893:
case 1978:
case 1046:
case 1542:
case 2287:
case 3856:
case 2646:
case 2555:
case 1122:
case 899:
case 82:
case 2171:
case 2922:
case 787:
case 1215:
case 3114:
case 3358:
case 3107:
case 1154:
case 3587:
case 1675:
case 1816:
case 310:
case 4012:
case 2464:
case 639:
case 1391:
case 837:
case 3280:
case 3182:
case 470:
case 1338:
case 3006:
case 4032:
case 543:
case 2100:
case 1836:
case 152:
case 1949:
case 954:
case 697:
case 126:
case 2405:
case 2059:
case 384:
case 3196:
case 3353:
case 3981:
case 3847:
case 1742:
case 1267:
case 1432:
case 1484:
case 692:
case 487:
case 1630:
case 2493:
case 512:
case 782:
case 2883:
case 2972:
case 3962:
case 988:
case 3452:
case 949:
case 1270:
case 2548:
case 1333:
case 3699:
case 1868:
case 3345:
case 3097:
case 1156:
case 34:
case 2780:
case 745:
case 3639:
case 303:
case 2466:
case 2025:
case 3241:
case 974:
case 3037:
case 172:
case 2743:
case 3476:
case 1814:
case 1861:
case 2433:
case 90:
case 450:
case 2644:
case 418:
case 2541:
case 1928:
case 554:
case 1492:
case 1834:
case 3569:
case 1973:
case 4086:
case 301:
case 2173:
case 3619:
case 378:
case 1690:
case 3163:
case 2384:
case 3279:
case 2755:
case 3136:
case 941:
case 1057:
case 2457:
case 1013:
case 2390:
case 1167:
case 397:
case 1709:
case 296:
case 1581:
case 3485:
case 2596:
case 3895:
case 802:
case 2768:
case 2092:
case 3723:
case 3450:
case 3045:
case 2970:
case 875:
case 1272:
case 1170:
case 3652:
case 3521:
case 1425:
case 1612:
case 4075:
case 3889:
case 3499:
case 1344:
case 2666:
case 2012:
case 2734:
case 3820:
case 3815:
case 36:
case 3439:
case 428:
case 3700:
case 3337:
case 2633:
case 1093:
case 2444:
case 963:
case 1357:
case 3304:
case 1108:
case 2536:
case 1880:
case 3263:
case 2714:
case 2273:
case 135:
case 2032:
case 2084:
case 1843:
case 2169:
case 3236:
case 331:
case 3179:
case 2707:
case 1459:
case 270:
case 2563:
case 2517:
case 367:
case 125:
case 3363:
case 3891:
case 3838:
case 3204:
case 3677:
case 251:
case 1932:
case 1008:
case 3217:
case 4049:
case 2132:
case 2504:
case 2230:
case 4000:
case 854:
case 2993:
case 92:
case 253:
case 3510:
case 1421:
case 3660:
case 1356:
case 3525:
case 2210:
case 3237:
case 3041:
case 1858:
case 2706:
case 1166:
case 329:
case 746:
case 2966:
case 2456:
case 532:
case 1851:
case 3048:
case 3976:
case 3145:
case 259:
case 2874:
case 3811:
case 1539:
case 1133:
case 1070:
case 1428:
case 812:
case 4023:
case 2290:
case 2192:
case 3153:
case 3775:
case 991:
case 3590:
case 2467:
case 115:
case 3532:
case 1205:
case 1157:
case 3584:
case 473:
case 1726:
case 3985:
case 2401:
case 2758:
case 907:
case 3063:
case 540:
case 2284:
case 2232:
case 662:
case 1621:
case 3460:
case 3950:
case 2028:
case 471:
case 3341:
case 2470:
case 2672:
case 3662:
case 4087:
case 876:
case 3016:
case 1293:
case 313:
case 2212:
case 3137:
case 3846:
case 751:
case 1266:
case 630:
case 766:
case 1144:
case 2021:
case 1628:
case 48:
case 2944:
case 575:
case 2190:
case 2292:
case 3688:
case 1301:
case 955:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1754380801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,];
var gg_b = "1754380801/";

function subdomain_from_url(url, base, dir) {
        var retval = '';
        if (!base) {
                if (dir === 'webp') {
                        retval = 'w';
                } else if (dir === 'avif') {
                        retval = 'a';
                }
        }
        
        var b = 16;
        
        var r = /\/[0-9a-f]{61}([0-9a-f]{2})([0-9a-f])/;
        var m = r.exec(url);
        if (!m) {
                return retval;
        }
        
        var g = parseInt(m[2]+m[1], b);
        if (!isNaN(g)) {
                if (base) {
                        retval = String.fromCharCode(97 + gg_m[g]) + base;
                } else {
                        retval = retval + (1+gg_m[g]);
                }
        }
        
        return retval;
}


function url_from_url(url, base, dir) {
        return url.replace(/\/\/..?\.(?:gold-usergeneratedcontent\.net|hitomi\.la)\//, '//'+subdomain_from_url(url, base, dir)+'.'+domain2+'/');
}

function full_path_from_hash(hash) {
        return gg_b+gg_s(hash)+'/'+hash;
}


function real_full_path_from_hash(hash) {
        return hash.replace(/^.*(..)(.)$/, '$2/$1/'+hash);
}

function url_from_hash(_galleryid, image, dir, ext) {
        ext = ext || dir || image.name.split('.').pop();
        if (dir === 'webp' || dir === 'avif') {
                dir = '';
        } else {
                dir += '/';
        }
        
        return 'https://a.'+domain2+'/'+dir+full_path_from_hash(image.hash)+'.'+ext;
}

function url_from_url_from_hash(_galleryid, image, dir, ext, base) {
        if ('tn' === base) {
                return url_from_url('https://a.'+domain2+'/'+dir+'/'+real_full_path_from_hash(image.hash)+'.'+ext, base);
        }
        return url_from_url(url_from_hash(_galleryid, image, dir, ext), base, dir);
}


function hitomi_get_image_list() {
  files = galleryinfo["files"];
  dir = "webp";
  type = "webp";
  base = "webp";
  result = [];
  btresult = [];
  stresult = [];
  for (var file of files) {
    result.push(url_from_url(url_from_hash(0, file, dir), undefined, dir));
    btresult.push(url_from_url_from_hash(0, file, 'webpbigtn', 'webp', 'tn'));
    stresult.push(url_from_url_from_hash(0, file, type+'smalltn', type, 'tn'));
  }
  return JSON.stringify({
    btresult: btresult,
    stresult: stresult,
    result: result,
  });
}

function hitomi_get_header_content(id) {
  return JSON.stringify({
      'referer': `https://hitomi.la/reader/${id}.html`,
      'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.3',
  });
}
