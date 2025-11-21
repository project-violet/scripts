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
var o = 1;
switch (g) {
case 1442:
case 3460:
case 3021:
case 88:
case 1828:
case 2329:
case 124:
case 3193:
case 887:
case 3624:
case 1584:
case 3816:
case 2530:
case 2617:
case 1149:
case 1095:
case 3514:
case 1886:
case 759:
case 4091:
case 3474:
case 1859:
case 706:
case 3713:
case 3962:
case 2465:
case 1427:
case 168:
case 69:
case 612:
case 361:
case 390:
case 3451:
case 3380:
case 1639:
case 2370:
case 1134:
case 429:
case 2682:
case 3170:
case 1795:
case 3052:
case 3500:
case 2863:
case 3158:
case 3937:
case 536:
case 3214:
case 873:
case 3721:
case 666:
case 3447:
case 1757:
case 476:
case 322:
case 1644:
case 2766:
case 548:
case 3848:
case 2175:
case 1041:
case 3185:
case 589:
case 1967:
case 2989:
case 776:
case 3013:
case 495:
case 2393:
case 244:
case 1083:
case 293:
case 2242:
case 295:
case 2791:
case 896:
case 1779:
case 1844:
case 2401:
case 1592:
case 2719:
case 1546:
case 92:
case 1062:
case 3308:
case 2990:
case 639:
case 569:
case 3297:
case 1921:
case 3323:
case 2045:
case 1171:
case 2199:
case 1737:
case 875:
case 744:
case 276:
case 2111:
case 3032:
case 3957:
case 2936:
case 1501:
case 686:
case 2663:
case 2278:
case 229:
case 2702:
case 2446:
case 1218:
case 1154:
case 3995:
case 1659:
case 4066:
case 1343:
case 957:
case 170:
case 3597:
case 2091:
case 188:
case 2338:
case 3067:
case 2694:
case 1839:
case 3399:
case 1381:
case 3740:
case 3983:
case 1628:
case 3824:
case 2002:
case 2550:
case 867:
case 2817:
case 1518:
case 941:
case 3616:
case 3906:
case 2745:
case 1686:
case 206:
case 1201:
case 3869:
case 805:
case 1877:
case 3732:
case 259:
case 2300:
case 312:
case 661:
case 1033:
case 3998:
case 2813:
case 1873:
case 3285:
case 2939:
case 2196:
case 2640:
case 3404:
case 771:
case 3063:
case 2852:
case 419:
case 2280:
case 1917:
case 3593:
case 1607:
case 3987:
case 3305:
case 2127:
case 2716:
case 3114:
case 2632:
case 2130:
case 1347:
case 1890:
case 1374:
case 3585:
case 3330:
case 3909:
case 3619:
case 2748:
case 2314:
case 163:
case 185:
case 3529:
case 1351:
case 622:
case 401:
case 1480:
case 1534:
case 114:
case 2580:
case 4024:
case 2335:
case 1982:
case 701:
case 3763:
case 3558:
case 1249:
case 232:
case 974:
case 2415:
case 1656:
case 3017:
case 572:
case 3782:
case 3538:
case 3361:
case 1963:
case 386:
case 2069:
case 432:
case 1087:
case 2621:
case 2355:
case 4016:
case 3802:
case 1856:
case 1101:
case 3891:
case 946:
case 3666:
case 1098:
case 1889:
case 1192:
case 3933:
case 1690:
case 1146:
case 10:
case 183:
case 201:
case 3819:
case 3443:
case 2388:
case 2471:
case 3350:
case 1499:
case 3481:
case 1825:
case 2150:
case 2508:
case 1271:
case 2211:
case 2724:
case 2986:
case 3126:
case 834:
case 3717:
case 2928:
case 2178:
case 502:
case 3082:
case 1118:
case 1012:
case 1254:
case 2903:
case 4048:
case 3155:
case 1994:
case 545:
case 1009:
case 1673:
case 177:
case 950:
case 2523:
case 1408:
case 2161:
case 3019:
case 452:
case 3973:
case 103:
case 3123:
case 3561:
case 3091:
case 1089:
case 958:
case 1025:
case 461:
case 1488:
case 671:
case 1354:
case 2555:
case 2732:
case 2588:
case 3578:
case 2869:
case 3745:
case 752:
case 3817:
case 3002:
case 3550:
case 1056:
case 868:
case 3108:
case 2526:
case 761:
case 854:
case 3261:
case 422:
case 2308:
case 1966:
case 2255:
case 173:
case 928:
case 1789:
case 395:
case 3791:
case 1231:
case 3492:
case 2995:
case 722:
case 3446:
case 1756:
case 3663:
case 3278:
case 1143:
case 2138:
case 2957:
case 376:
case 3199:
case 4052:
case 2872:
case 1181:
case 3045:
case 582:
case 3250:
case 3230:
case 196:
case 984:
case 4032:
case 2214:
case 2500:
case 551:
case 1612:
case 3956:
case 1902:
case 1110:
case 3180:
case 2170:
case 632:
case 3682:
case 800:
case 2672:
case 393:
case 1260:
case 1609:
case 3296:
case 2235:
case 344:
case 3393:
case 2013:
case 3989:
case 2129:
case 1833:
case 3175:
case 2848:
case 2422:
case 1653:
case 3925:
case 54:
case 2164:
case 1349:
case 915:
case 1790:
case 2669:
case 142:
case 1876:
case 2514:
case 1315:
case 521:
case 3364:
case 2200:
case 1036:
case 3530:
case 3907:
case 870:
case 2624:
case 888:
case 2193:
case 1551:
case 1435:
case 3329:
case 2021:
case 3527:
case 2460:
case 698:
case 3370:
case 1334:
case 290:
case 3066:
case 1698:
case 3205:
case 516:
case 3465:
case 1414:
case 2962:
case 1773:
case 481:
case 105:
case 2713:
case 4067:
case 712:
case 3832:
case 1346:
case 1131:
case 3769:
case 1392:
case 4063:
case 2082:
case 2188:
case 3928:
case 2238:
case 2126:
case 2976:
case 3724:
case 1916:
case 1281:
case 3508:
case 3150:
case 606:
case 923:
case 1739:
case 2197:
case 1641:
case 497:
case 3523:
case 3959:
case 1044:
case 180:
case 918:
case 1301:
case 937:
case 3024:
case 466:
case 2802:
case 1820:
case 676:
case 1581:
case 3208:
case 3069:
case 286:
case 885:
case 1837:
case 2538:
case 3223:
case 2350:
case 2481:
case 3471:
case 3326:
case 953:
case 1438:
case 239:
case 2378:
case 2933:
case 1879:
case 2953:
case 3944:
case 540:
case 2327:
case 786:
case 579:
case 1365:
case 3314:
case 2619:
case 2330:
case 3575:
case 1147:
case 2585:
case 1384:
case 2602:
case 807:
case 1464:
case 511:
case 2100:
case 1857:
case 2558:
case 1122:
case 80:
case 1028:
case 1620:
case 1972:
case 2763:
case 3335:
case 865:
case 2293:
case 1429:
case 1895:
case 2342:
case 2396:
case 3016:
case 1637:
case 1841:
case 3142:
case 2794:
case 2404:
case 1662:
case 3196:
case 134:
case 2229:
case 3275:
case 2285:
case 1883:
case 3813:
case 398:
case 556:
case 3449:
case 509:
case 212:
case 3300:
case 925:
case 1786:
case 3632:
case 1174:
case 2114:
case 3716:
case 1504:
case 3977:
case 1210:
case 3280:
case 3852:
case 2063:
case 4082:
case 246:
case 774:
case 2109:
case 3905:
case 2746:
case 2402:
case 3615:
case 1664:
case 353:
case 2792:
case 8:
case 3868:
case 220:
case 2153:
case 1317:
case 3589:
case 1591:
case 2579:
case 628:
case 664:
case 1245:
case 1658:
case 2843:
case 3556:
case 1502:
case 1479:
case 4084:
case 3854:
case 2491:
case 474:
case 2701:
case 3467:
case 1172:
case 1078:
case 3207:
case 156:
case 2339:
case 802:
case 2900:
case 3031:
case 337:
case 238:
case 2112:
case 2046:
case 217:
case 3225:
case 1761:
case 111:
case 1382:
case 3139:
case 704:
case 250:
case 3289:
case 3432:
case 658:
case 2279:
case 2935:
case 1219:
case 3996:
case 323:
case 3942:
case 971:
case 2220:
case 3353:
case 179:
case 140:
case 2187:
case 3731:
case 872:
case 2344:
case 3440:
case 919:
case 1750:
case 1462:
case 404:
case 3507:
case 3930:
case 2001:
case 2765:
case 4001:
case 3186:
case 1730:
case 3413:
case 2257:
case 3774:
case 204:
case 3128:
case 3236:
case 71:
case 508:
case 3978:
case 3751:
case 717:
case 3333:
case 1931:
case 3047:
case 3103:
case 2541:
case 998:
case 3452:
case 1742:
case 2955:
case 1796:
case 4092:
case 417:
case 1266:
case 4046:
case 3290:
case 3573:
case 2583:
case 1005:
case 41:
case 3961:
case 1363:
case 578:
case 2643:
case 3051:
case 720:
case 684:
case 1858:
case 4018:
case 1027:
case 3654:
case 2466:
case 1394:
case 2065:
case 1870:
case 2206:
case 3536:
case 932:
case 2303:
case 274:
case 746:
case 2084:
case 1829:
case 355:
case 2328:
case 831:
case 3376:
case 1457:
case 2386:
case 3815:
case 894:
case 1864:
case 1885:
case 1148:
case 3060:
case 1096:
case 3273:
case 3590:
case 3421:
case 843:
case 567:
case 3743:
case 637:
case 2622:
case 2287:
case 1600:
case 3277:
case 4049:
case 976:
case 3801:
case 1008:
case 1102:
case 63:
case 56:
case 2958:
case 1799:
case 1340:
case 2512:
case 1409:
case 1572:
case 364:
case 1224:
case 995:
case 1412:
case 328:
case 2298:
case 3125:
case 653:
case 2307:
case 3239:
case 22:
case 542:
case 3846:
case 2553:
case 3892:
case 2179:
case 1119:
case 1023:
case 3544:
case 2587:
case 3081:
case 3577:
case 1569:
case 3665:
case 1367:
case 2674:
case 2389:
case 2993:
case 14:
case 2325:
case 241:
case 1524:
case 906:
case 1498:
case 147:
case 1826:
case 2212:
case 2424:
case 1635:
case 3539:
case 735:
case 25:
case 2068:
case 2209:
case 257:
case 596:
case 1897:
case 2469:
case 2356:
case 869:
case 2253:
case 3320:
case 3417:
case 1855:
case 1835:
case 3395:
case 2233:
case 2141:
case 2860:
case 3503:
case 45:
case 3357:
case 2416:
case 1248:
case 1655:
case 457:
case 733:
case 2183:
case 889:
case 3173:
case 3865:
case 3586:
case 441:
case 2034:
case 2390:
case 3884:
case 2631:
case 4054:
case 699:
case 757:
case 235:
case 75:
case 836:
case 1626:
case 1352:
case 1166:
case 1548:
case 427:
case 2847:
case 3259:
case 3646:
case 3463:
case 42:
case 1775:
case 3004:
case 1981:
case 2373:
case 2448:
case 3911:
case 2276:
case 58:
case 3601:
case 72:
case 3228:
case 3341:
case 727:
case 1433:
case 3710:
case 2049:
case 384:
case 145:
case 3084:
case 374:
case 2536:
case 3206:
case 1699:
case 2834:
case 3681:
case 1252:
case 3595:
case 3065:
case 1014:
case 1880:
case 4031:
case 753:
case 3359:
case 437:
case 57:
case 1521:
case 1163:
case 1:
case 2051:
case 577:
case 43:
case 2722:
case 2421:
case 2668:
case 2273:
case 3386:
case 1035:
case 1436:
case 809:
case 856:
case 3241:
case 255:
case 3133:
case 102:
case 1946:
case 453:
case 1992:
case 1000:
case 3506:
case 1552:
case 2333:
case 50:
case 1608:
case 3988:
case 299:
case 2751:
case 2978:
case 2022:
case 507:
case 2236:
case 2774:
case 304:
case 2849:
case 3784:
case 2413:
case 3176:
case 2186:
case 723:
case 2950:
case 3997:
case 2290:
case 2159:
case 99:
case 3955:
case 423:
case 2760:
case 2452:
case 3541:
case 826:
case 1735:
case 2047:
case 225:
case 2942:
case 1755:
case 3445:
case 2996:
case 514:
case 3279:
case 4047:
case 425:
case 2289:
case 350:
case 1823:
case 1372:
case 1407:
case 3092:
case 317:
case 2312:
case 3198:
case 392:
case 610:
case 3562:
case 2930:
case 725:
case 2507:
case 633:
case 3914:
case 3344:
case 2256:
case 641:
case 3187:
case 1117:
case 4022:
case 1532:
case 1788:
case 1097:
case 455:
case 627:
case 2868:
case 320:
case 62:
case 253:
case 2144:
case 3402:
case 3377:
case 1456:
case 2387:
case 3746:
case 939:
case 1055:
case 1240:
case 3262:
case 2525:
case 346:
case 3112:
case 2398:
case 338:
case 237:
case 3537:
case 23:
case 1680:
case 3339:
case 1425:
case 755:
case 4051:
case 1182:
case 2871:
case 131:
case 1899:
case 3881:
case 3701:
case 1232:
case 3491:
case 194:
case 3843:
case 143:
case 2692:
case 428:
case 2306:
case 1968:
case 413:
case 1729:
case 922:
case 816:
case 1954:
case 2710:
case 570:
case 549:
case 1770:
case 2136:
case 1563:
case 3157:
case 3938:
case 3276:
case 2383:
case 2999:
case 1121:
case 588:
case 3822:
case 2173:
case 3183:
case 990:
case 2559:
case 961:
case 458:
case 1029:
case 1486:
case 1113:
case 1896:
case 84:
case 1428:
case 1085:
case 2503:
case 1842:
case 847:
case 3233:
case 1594:
case 1403:
case 2528:
case 335:
case 1827:
case 3851:
case 3106:
case 4081:
case 758:
case 2010:
case 500:
case 862:
case 2884:
case 3631:
case 2908:
case 1830:
case 2618:
case 1263:
case 169:
case 3034:
case 2865:
case 4043:
case 3212:
case 2043:
case 341:
case 1439:
case 1517:
case 1038:
case 882:
case 3831:
case 3674:
case 2665:
case 333:
case 2577:
case 2081:
case 3071:
case 1319:
case 3587:
case 981:
case 2417:
case 692:
case 310:
case 3253:
case 2244:
case 61:
case 1477:
case 3469:
case 554:
case 258:
case 357:
case 1642:
case 2337:
case 650:
case 3068:
case 3209:
case 2539:
case 3424:
case 1738:
case 3512:
case 3771:
case 2362:
case 2156:
case 2801:
case 484:
case 3754:
case 1444:
case 3622:
case 2743:
case 230:
case 2544:
case 213:
case 524:
case 646:
case 415:
case 2892:
case 3553:
case 2239:
case 2482:
case 2975:
case 32:
case 228:
case 1605:
case 620:
case 784:
case 3964:
case 1915:
case 3759:
case 477:
case 198:
case 1813:
case 1449:
case 2033:
case 1300:
case 667:
case 1939:
case 537:
case 47:
case 391:
case 3883:
case 3703:
case 1048:
case 1142:
case 2607:
case 642:
case 3806:
case 2234:
case 3151:
case 1127:
case 3504:
case 3969:
case 1977:
case 3210:
case 3924:
case 1575:
case 2689:
case 3003:
case 465:
case 3147:
case 2374:
case 1667:
case 675:
case 1314:
case 1944:
case 2733:
case 40:
case 1434:
case 2351:
case 3470:
case 696:
case 2836:
case 1016:
case 523:
case 3086:
case 765:
case 70:
case 518:
case 1821:
case 3972:
case 3485:
case 2982:
case 2656:
case 1415:
case 707:
case 3837:
case 2636:
case 1397:
case 3695:
case 2571:
case 3581:
case 1208:
case 2712:
case 2554:
case 3820:
case 1621:
case 525:
case 1468:
case 3657:
case 4076:
case 2331:
case 2690:
case 2098:
case 2889:
case 1454:
case 101:
case 283:
case 714:
case 265:
case 866:
case 673:
case 2825:
case 1223:
case 3948:
case 3916:
case 1299:
case 2423:
case 3606:
case 1652:
case 3281:
case 979:
case 1508:
case 1724:
case 119:
case 3243:
case 2254:
case 3777:
case 3346:
case 812:
case 2012:
case 897:
case 3392:
case 603:
case 1613:
case 2673:
case 2009:
case 2994:
case 911:
case 2408:
case 4033:
case 2798:
case 1523:
case 3044:
case 277:
case 2053:
case 1840:
case 1161:
case 171:
case 27:
case 3739:
case 3641:
case 3104:
case 1527:
case 881:
case 3945:
case 4037:
case 788:
case 2932:
case 1329:
case 3435:
case 749:
case 3036:
case 528:
case 1385:
case 1907:
case 3574:
case 4020:
case 2584:
case 2886:
case 3687:
case 2149:
case 1364:
case 2677:
case 3247:
case 488:
case 2430:
case 3414:
case 2940:
case 1358:
case 3773:
case 982:
case 367:
case 3698:
case 691:
case 1596:
case 1205:
case 2639:
case 36:
case 1894:
case 3334:
case 470:
case 1180:
case 1682:
case 700:
case 1227:
case 2795:
case 2265:
case 1863:
case 2006:
case 558:
case 2757:
case 1766:
case 3400:
case 3349:
case 3790:
case 1175:
case 400:
case 1393:
case 144:
case 375:
case 3991:
case 1989:
case 193:
case 3260:
case 1296:
case 3609:
case 4062:
case 1505:
case 3919:
case 2083:
case 2844:
case 1791:
case 3789:
case 2546:
case 1719:
case 2168:
case 921:
case 2592:
case 1990:
case 3966:
case 3725:
case 4041:
case 608:
case 2737:
case 4006:
case 1199:
case 2171:
case 1882:
case 1250:
case 2921:
case 1111:
case 3812:
case 2501:
case 1492:
case 2154:
case 2218:
case 1446:
case 3756:
case 3354:
case 2246:
case 951:
case 270:
case 3025:
case 584:
case 2478:
case 2343:
case 3488:
case 680:
case 1338:
case 2913:
case 3898:
case 387:
case 2079:
case 3371:
case 1019:
case 1973:
case 2450:
case 2762:
case 303:
case 2839:
case 1123:
case 3497:
case 2020:
case 861:
case 4095:
case 768:
case 3056:
case 1002:
case 2952:
case 3531:
case 3368:
case 3455:
case 2037:
case 2518:
case 515:
case 94:
case 1817:
case 159:
case 4057:
case 2877:
case 424:
case 1578:
case 3676:
case 3118:
case 2392:
case 898:
case 2131:
case 2346:
case 3254:
case 1082:
case 1845:
case 1238:
case 1126:
case 2606:
case 3423:
case 2281:
case 3271:
case 2641:
case 37:
case 2739:
case 2862:
case 491:
case 3053:
case 649:
case 3408:
case 3994:
case 688:
case 2683:
case 574:
case 3009:
case 3673:
case 2301:
case 434:
case 2543:
case 1802:
case 2657:
case 931:
case 2820:
case 3554:
case 186:
case 2695:
case 4028:
case 3636:
case 943:
case 2837:
case 504:
case 2438:
case 365:
case 30:
case 1819:
case 1378:
case 3753:
case 139:
case 1443:
case 3889:
case 208:
case 3098:
case 1891:
case 2318:
case 600:
case 3568:
case 832:
case 3690:
case 1953:
case 3480:
case 3625:
case 1327:
case 385:
case 2059:
case 408:
case 1909:
case 2365:
case 1094:
case 2679:
case 2147:
case 1330:
case 3689:
case 1866:
case 654:
case 1100:
case 3249:
case 51:
case 708:
case 1602:
case 592:
case 3475:
case 3982:
case 2485:
case 2028:
case 2122:
case 166:
case 2086:
case 3076:
case 1570:
case 550:
case 2637:
case 3360:
case 2160:
case 234:
case 1229:
case 819:
case 2883:
case 1285:
case 538:
case 19:
case 3215:
case 1264:
case 3033:
case 197:
case 3776:
case 3347:
case 1258:
case 3549:
case 3165:
case 1305:
case 2210:
case 2504:
case 778:
case 1063:
case 3917:
case 3839:
case 203:
case 28:
case 3762:
case 1399:
case 3450:
case 2371:
case 1983:
case 3603:
case 2426:
case 287:
case 3913:
case 388:
case 1067:
case 2488:
case 3343:
case 1941:
case 46:
case 2025:
case 67:
case 742:
case 1555:
case 3246:
case 2354:
case 3201:
case 1732:
case 3518:
case 2455:
case 3037:
case 3952:
case 1824:
case 2056:
case 2707:
case 989:
case 1526:
case 1297:
case 607:
case 2809:
case 2725:
case 683:
case 60:
case 535:
case 1255:
case 3546:
case 1040:
case 4073:
case 3062:
case 796:
case 2789:
case 475:
case 3844:
case 1767:
case 2756:
case 3218:
case 1995:
case 3154:
case 2231:
case 3501:
case 2007:
case 3720:
case 844:
case 893:
case 1323:
case 3171:
case 2181:
case 895:
case 1500:
case 1937:
case 614:
case 1158:
case 1721:
case 1214:
case 55:
case 3795:
case 510:
case 2110:
case 2902:
case 2612:
case 3134:
case 1672:
case 3083:
case 2919:
case 2073:
case 473:
case 3967:
case 1129:
case 1235:
case 663:
case 533:
case 829:
case 2653:
case 1848:
case 1185:
case 1164:
case 3115:
case 3644:
case 2400:
case 1200:
case 2315:
case 3886:
case 2574:
case 1375:
case 2435:
case 2551:
case 3932:
case 787:
case 1460:
case 1752:
case 3706:
case 969:
case 703:
case 78:
case 3828:
case 1021:
case 4025:
case 190:
case 1380:
case 26:
case 1535:
case 3741:
case 2090:
case 368:
case 2560:
case 2773:
case 1962:
case 152:
case 3940:
case 3430:
case 859:
case 806:
case 1474:
case 4089:
case 1713:
case 3859:
case 3934:
case 2102:
case 631:
case 2600:
case 561:
case 590:
case 2910:
case 1512:
case 2340:
case 1771:
case 2799:
case 1137:
case 694:
case 1958:
case 815:
case 2224:
case 216:
case 2572:
case 3738:
case 0:
case 3582:
case 552:
case 1298:
case 127:
case 2412:
case 1509:
case 3915:
case 884:
case 1307:
case 1647:
case 3167:
case 1929:
case 1768:
case 2614:
case 2904:
case 133:
case 2569:
case 3319:
case 1587:
case 1071:
case 2145:
case 3878:
case 2011:
case 1993:
case 3630:
case 1389:
case 3391:
case 1831:
case 1674:
case 2367:
case 782:
case 1325:
case 3439:
case 24:
case 2708:
case 247:
case 3949:
case 2498:
case 348:
case 1054:
case 336:
case 1660:
case 970:
case 3642:
case 2897:
case 157:
case 3696:
case 1068:
case 2487:
case 1356:
case 3302:
case 1469:
case 988:
case 4075:
case 1253:
case 110:
case 3064:
case 1233:
case 3594:
case 3896:
case 672:
case 74:
case 3428:
case 3085:
case 1141:
case 1860:
case 1336:
case 3029:
case 282:
case 968:
case 3486:
case 3263:
case 1034:
case 369:
case 2814:
case 2516:
case 1874:
case 1749:
case 762:
case 3830:
case 3366:
case 924:
case 3058:
case 1106:
case 3152:
case 2626:
case 4011:
case 3827:
case 3805:
case 716:
case 3968:
case 2352:
case 3294:
case 1847:
case 421:
case 602:
case 3971:
case 1448:
case 3758:
case 2981:
case 3121:
case 954:
case 3563:
case 1938:
case 416:
case 2313:
case 721:
case 2943:
case 1195:
case 3954:
case 2433:
case 828:
case 2629:
case 907:
case 146:
case 4042:
case 2437:
case 3240:
case 1109:
case 1262:
case 965:
case 1746:
case 2420:
case 1579:
case 120:
case 2061:
case 3567:
case 2502:
case 2050:
case 1843:
case 343:
case 4030:
case 1701:
case 3489:
case 1491:
case 3026:
case 1520:
case 597:
case 1339:
case 256:
case 2670:
case 855:
case 2078:
case 1881:
case 3899:
case 3088:
case 1112:
case 3811:
case 4027:
case 1018:
case 1610:
case 1900:
case 2838:
case 1092:
case 1046:
case 3540:
case 1562:
case 11:
case 3797:
case 3407:
case 899:
case 3372:
case 211:
case 2761:
case 1935:
case 977:
case 636:
case 3755:
case 1445:
case 97:
case 3117:
case 240:
case 279:
case 3788:
case 3532:
case 1220:
case 2778:
case 1344:
case 1187:
case 1604:
case 3808:
case 226:
case 1001:
case 825:
case 2693:
case 3726:
case 689:
case 3984:
case 1765:
case 3714:
case 823:
case 1784:
case 2730:
case 426:
case 1988:
case 440:
case 3552:
case 3000:
case 539:
case 1295:
case 3918:
case 2893:
case 3608:
case 3735:
case 726:
case 2796:
case 3194:
case 1955:
case 3623:
case 2406:
case 2005:
case 372:
case 2266:
case 2363:
case 779:
case 3513:
case 1997:
case 1557:
case 2858:
case 4078:
case 3163:
case 1643:
case 3700:
case 2027:
case 1359:
case 3490:
case 3521:
case 853:
case 3252:
case 1681:
case 1206:
case 1595:
case 3014:
case 1065:
case 3880:
case 174:
case 1303:
case 2030:
case 1133:
case 3946:
case 837:
case 3992:
case 3436:
case 1241:
case 756:
case 3213:
case 2457:
case 3035:
case 2096:
case 1463:
case 3775:
case 3166:
case 1259:
case 2764:
case 1190:
case 2968:
case 3352:
case 1203:
case 2805:
case 2729:
case 827:
case 3943:
case 82:
case 1136:
case 2093:
case 1911:
case 3313:
case 1601:
case 3800:
case 2121:
case 3216:
case 3655:
case 3321:
case 1923:
case 436:
case 2113:
case 2486:
case 382:
case 3476:
case 841:
case 2085:
case 2896:
case 2594:
case 3835:
case 1395:
case 529:
case 2064:
case 905:
case 736:
case 1528:
case 2793:
case 2403:
case 3626:
case 4038:
case 2650:
case 2152:
case 2058:
case 2366:
case 1908:
case 2459:
case 1010:
case 3814:
case 2070:
case 1865:
case 248:
case 3498:
case 3826:
case 2949:
case 640:
case 2439:
case 2282:
case 34:
case 469:
case 3272:
case 3524:
case 4070:
case 1107:
case 2850:
case 1043:
case 3367:
case 2517:
case 2391:
case 1379:
case 593:
case 1818:
case 4058:
case 98:
case 4085:
case 611:
case 4064:
case 3487:
case 2861:
case 2140:
case 3897:
case 2642:
case 158:
case 3723:
case 4029:
case 351:
case 3635:
case 835:
case 236:
case 2738:
case 164:
case 3224:
case 3711:
case 4093:
case 1781:
case 3340:
case 609:
case 3910:
case 1801:
case 3102:
case 130:
case 2934:
case 2217:
case 1980:
case 3453:
case 1544:
case 1189:
case 3191:
case 1125:
case 321:
case 1482:
case 2605:
case 1536:
case 2901:
case 846:
case 3870:
case 1671:
case 1834:
case 2490:
case 1654:
case 1722:
case 3858:
case 431:
case 2:
case 2163:
case 1051:
case 820:
case 4088:
case 1060:
case 2875:
case 1590:
case 1273:
case 3096:
case 2316:
case 2035:
case 2213:
case 1747:
case 794:
case 155:
case 731:
case 2436:
case 2992:
case 838:
case 3495:
case 2946:
case 202:
case 3829:
case 2608:
case 817:
case 2918:
case 1333:
case 2000:
case 3931:
case 1236:
case 81:
case 1022:
case 3441:
case 1978:
case 1751:
case 3730:
case 1413:
case 850:
case 1849:
case 2221:
case 3483:
case 1950:
case 3116:
case 2513:
case 3363:
case 934:
case 1159:
case 3266:
case 1573:
case 1290:
case 272:
case 3005:
case 960:
case 2623:
case 1760:
case 3742:
case 2194:
case 1047:
case 1996:
case 3960:
case 1942:
case 804:
case 1432:
case 1289:
case 3382:
case 311:
case 532:
case 3761:
case 1225:
case 2372:
case 980:
case 2823:
case 2540:
case 118:
case 3974:
case 2808:
case 1930:
case 1309:
case 1440:
case 3462:
case 1649:
case 1177:
case 3545:
case 3778:
case 1353:
case 2788:
case 647:
case 379:
case 2532:
case 2117:
case 3061:
case 3591:
case 3317:
case 3685:
case 1905:
case 1387:
case 2456:
case 1144:
case 153:
case 3629:
case 3947:
case 4035:
case 3838:
case 702:
case 2811:
case 3172:
case 1634:
case 2088:
case 2899:
case 1871:
case 231:
case 2425:
case 3479:
case 294:
case 2232:
case 243:
case 3245:
case 4014:
case 3502:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1763715602/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,];
var gg_b = "1763715602/";

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
