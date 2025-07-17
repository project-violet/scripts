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
case 4002:
case 2477:
case 3903:
case 531:
case 733:
case 2472:
case 1403:
case 1859:
case 4007:
case 3754:
case 2554:
case 2563:
case 2083:
case 1123:
case 1817:
case 3867:
case 3888:
case 2898:
case 1812:
case 3895:
case 1605:
case 1713:
case 508:
case 1932:
case 2886:
case 626:
case 1490:
case 2053:
case 1949:
case 4044:
case 330:
case 3611:
case 2209:
case 1394:
case 603:
case 634:
case 2855:
case 3449:
case 0:
case 2980:
case 3274:
case 382:
case 3211:
case 1341:
case 3224:
case 1206:
case 2191:
case 2840:
case 2946:
case 3674:
case 3784:
case 3000:
case 2609:
case 2064:
case 63:
case 1208:
case 3102:
case 2754:
case 1363:
case 3477:
case 2151:
case 1972:
case 2903:
case 3107:
case 732:
case 3945:
case 2888:
case 3898:
case 1608:
case 3427:
case 509:
case 3885:
case 2895:
case 1922:
case 2862:
case 3422:
case 2763:
case 1927:
case 3856:
case 44:
case 2093:
case 3083:
case 1133:
case 905:
case 2449:
case 3855:
case 346:
case 391:
case 2274:
case 282:
case 2990:
case 3980:
case 2858:
case 3053:
case 1480:
case 3886:
case 3741:
case 2541:
case 2784:
case 931:
case 3584:
case 4081:
case 2000:
case 3609:
case 1899:
case 2211:
case 607:
case 1446:
case 3191:
case 3234:
case 2181:
case 1021:
case 170:
case 1467:
case 2956:
case 4063:
case 1293:
case 1495:
case 1733:
case 3995:
case 708:
case 1912:
case 1523:
case 1832:
case 2163:
case 3967:
case 756:
case 3988:
case 1351:
case 2998:
case 3803:
case 2502:
case 3459:
case 635:
case 1573:
case 3848:
case 89:
case 3005:
case 3323:
case 2507:
case 2751:
case 3551:
case 1959:
case 397:
case 889:
case 2940:
case 2221:
case 3006:
case 3231:
case 1989:
case 3581:
case 110:
case 4084:
case 2781:
case 1200:
case 932:
case 1849:
case 3631:
case 2621:
case 2986:
case 2544:
case 937:
case 1381:
case 293:
case 3141:
case 2271:
case 705:
case 2955:
case 601:
case 1074:
case 1307:
case 1723:
case 1533:
case 1822:
case 3985:
case 2417:
case 2967:
case 1456:
case 776:
case 2373:
case 1302:
case 3333:
case 580:
case 1877:
case 3751:
case 1683:
case 532:
case 1872:
case 2702:
case 3845:
case 1773:
case 885:
case 2791:
case 3781:
case 2581:
case 1999:
case 1264:
case 904:
case 2061:
case 1440:
case 888:
case 3214:
case 297:
case 2194:
case 3499:
case 3184:
case 2006:
case 1344:
case 3221:
case 2890:
case 916:
case 3880:
case 1486:
case 292:
case 381:
case 393:
case 1391:
case 1253:
case 3621:
case 143:
case 3614:
case 3544:
case 2996:
case 186:
case 936:
case 1234:
case 250:
case 2031:
case 848:
case 1584:
case 52:
case 1886:
case 3480:
case 1053:
case 489:
case 1741:
case 619:
case 3384:
case 2394:
case 951:
case 1855:
case 183:
case 146:
case 191:
case 1422:
case 2937:
case 3133:
case 2817:
case 1427:
case 729:
case 49:
case 65:
case 4023:
case 3513:
case 2812:
case 3922:
case 512:
case 2605:
case 2713:
case 540:
case 1477:
case 4073:
case 3363:
case 1945:
case 3972:
case 2859:
case 3445:
case 1313:
case 2448:
case 2173:
case 1554:
case 1102:
case 845:
case 917:
case 494:
case 1594:
case 765:
case 2899:
case 3889:
case 2014:
case 1181:
case 270:
case 1449:
case 2384:
case 3661:
case 971:
case 618:
case 1274:
case 725:
case 2071:
case 1858:
case 488:
case 3606:
case 2480:
case 912:
case 3490:
case 241:
case 296:
case 1896:
case 1611:
case 67:
case 1437:
case 2608:
case 728:
case 1867:
case 1895:
case 2513:
case 2922:
case 1862:
case 1763:
case 1432:
case 3123:
case 2927:
case 2450:
case 772:
case 564:
case 1093:
case 485:
case 3937:
case 2445:
case 96:
case 3403:
case 2243:
case 536:
case 3205:
case 768:
case 2977:
case 3448:
case 1754:
case 1903:
case 928:
case 844:
case 1544:
case 343:
case 72:
case 3391:
case 3664:
case 622:
case 3486:
case 1880:
case 953:
case 972:
case 1271:
case 2074:
case 627:
case 1940:
case 1221:
case 2024:
case 3034:
case 1499:
case 977:
case 1184:
case 1591:
case 210:
case 1671:
case 1781:
case 662:
case 2200:
case 3264:
case 1502:
case 717:
case 3773:
case 1845:
case 2693:
case 3683:
case 2573:
case 740:
case 569:
case 1751:
case 2959:
case 3498:
case 3827:
case 675:
case 925:
case 2293:
case 2495:
case 3485:
case 1985:
case 2733:
case 3533:
case 712:
case 3307:
case 48:
case 1850:
case 2351:
case 1890:
case 3496:
case 2486:
case 2664:
case 2009:
case 3381:
case 525:
case 1958:
case 2391:
case 973:
case 2253:
case 1631:
case 3849:
case 606:
case 3458:
case 820:
case 286:
case 679:
case 2999:
case 3989:
case 663:
case 347:
case 484:
case 3200:
case 1061:
case 2440:
case 860:
case 2344:
case 957:
case 614:
case 577:
case 568:
case 1707:
case 1323:
case 2877:
case 3959:
case 2683:
case 3573:
case 2773:
case 1459:
case 1803:
case 1848:
case 724:
case 2723:
case 2307:
case 3523:
case 2822:
case 3912:
case 3462:
case 511:
case 1995:
case 3733:
case 1988:
case 1967:
case 1417:
case 4013:
case 1373:
case 764:
case 3467:
case 3917:
case 2827:
case 751:
case 495:
case 3837:
case 3495:
case 2485:
case 1412:
case 1962:
case 3293:
case 2405:
case 3178:
case 1272:
case 2203:
case 3245:
case 2248:
case 1627:
case 3408:
case 2382:
case 2175:
case 3392:
case 3365:
case 1277:
case 2387:
case 3397:
case 1227:
case 749:
case 4025:
case 3718:
case 1592:
case 4038:
case 1883:
case 2138:
case 1222:
case 1768:
case 3135:
case 1787:
case 3250:
case 2012:
case 560:
case 25:
case 1409:
case 1853:
case 409:
case 1086:
case 3136:
case 877:
case 2730:
case 1566:
case 476:
case 3720:
case 1179:
case 321:
case 3646:
case 54:
case 1055:
case 2716:
case 1757:
case 103:
case 3110:
case 318:
case 828:
case 490:
case 166:
case 2924:
case 1719:
case 2911:
case 3821:
case 2569:
case 3769:
case 2357:
case 1129:
case 3770:
case 1864:
case 361:
case 3246:
case 872:
case 1434:
case 853:
case 2690:
case 2570:
case 3301:
case 3680:
case 2089:
case 274:
case 544:
case 2650:
case 1147:
case 3368:
case 13:
case 1632:
case 4078:
case 2443:
case 2408:
case 2392:
case 3248:
case 2128:
case 3138:
case 1232:
case 1088:
case 2250:
case 1797:
case 3125:
case 1587:
case 2718:
case 1237:
case 1062:
case 748:
case 1582:
case 405:
case 2515:
case 3715:
case 3603:
case 94:
case 1557:
case 2516:
case 3716:
case 3974:
case 221:
case 1370:
case 319:
case 1058:
case 2909:
case 2110:
case 1701:
case 2871:
case 2136:
case 1096:
case 408:
case 1552:
case 456:
case 2720:
case 745:
case 1766:
case 2530:
case 869:
case 857:
case 3520:
case 3730:
case 3357:
case 3569:
case 1411:
case 431:
case 2099:
case 374:
case 2301:
case 2246:
case 1800:
case 1906:
case 3461:
case 3911:
case 1649:
case 3027:
case 3535:
case 3725:
case 4018:
case 2262:
case 2735:
case 1983:
case 1197:
case 2525:
case 2037:
case 3256:
case 2728:
case 355:
case 2538:
case 3298:
case 3115:
case 3022:
case 3483:
case 2493:
case 40:
case 1050:
case 2295:
case 3285:
case 1335:
case 3072:
case 1747:
case 1328:
case 135:
case 2662:
case 2575:
case 2695:
case 3077:
case 1843:
case 3775:
case 2667:
case 3578:
case 138:
case 813:
case 3921:
case 314:
case 2811:
case 3686:
case 2824:
case 363:
case 647:
case 1414:
case 1964:
case 851:
case 4069:
case 262:
case 1421:
case 432:
case 1336:
case 3655:
case 1299:
case 4070:
case 2339:
case 3510:
case 358:
case 259:
case 1101:
case 2296:
case 642:
case 3286:
case 3640:
case 3116:
case 1471:
case 101:
case 3130:
case 3971:
case 1699:
case 948:
case 3726:
case 824:
case 1704:
case 3536:
case 1560:
case 2022:
case 3267:
case 1182:
case 1375:
case 2298:
case 3032:
case 3295:
case 2285:
case 1212:
case 1659:
case 2483:
case 3493:
case 2725:
case 3347:
case 4015:
case 3728:
case 2256:
case 2738:
case 2528:
case 2077:
case 1805:
case 3575:
case 3695:
case 1259:
case 82:
case 744:
case 3778:
case 1547:
case 1338:
case 3662:
case 1048:
case 362:
case 1900:
case 1119:
case 1289:
case 1326:
case 2655:
case 404:
case 2921:
case 214:
case 3811:
case 1539:
case 3931:
case 1806:
case 3824:
case 2464:
case 3400:
case 2240:
case 3576:
case 3696:
case 4016:
case 1779:
case 3120:
case 1090:
case 2255:
case 3736:
case 1504:
case 223:
case 3526:
case 1152:
case 2726:
case 378:
case 686:
case 3710:
case 258:
case 367:
case 359:
case 3339:
case 1157:
case 1352:
case 1924:
case 3906:
case 4029:
case 1831:
case 3649:
case 3519:
case 1461:
case 1911:
case 307:
case 1357:
case 2316:
case 2864:
case 2129:
case 1406:
case 2434:
case 3139:
case 174:
case 1089:
case 1690:
case 3552:
case 2409:
case 989:
case 2160:
case 2086:
case 2752:
case 3096:
case 3249:
case 1730:
case 1520:
case 1319:
case 2179:
case 3474:
case 226:
case 451:
case 2055:
case 646:
case 2757:
case 1716:
case 464:
case 683:
case 3557:
case 3701:
case 234:
case 3058:
case 2501:
case 2227:
case 1518:
case 3062:
case 1648:
case 3237:
case 1017:
case 2056:
case 3893:
case 3232:
case 2098:
case 2565:
case 99:
case 2222:
case 3765:
case 3587:
case 2597:
case 1012:
case 15:
case 2787:
case 798:
case 1405:
case 2272:
case 1203:
case 1248:
case 2627:
case 784:
case 1382:
case 1059:
case 2908:
case 2622:
case 3147:
case 3632:
case 3905:
case 3316:
case 1769:
case 2961:
case 816:
case 1301:
case 1680:
case 1099:
case 161:
case 2139:
case 366:
case 4039:
case 2519:
case 3330:
case 2320:
case 2649:
case 1366:
case 471:
case 3757:
case 2369:
case 1280:
case 121:
case 682:
case 2370:
case 2058:
case 3501:
case 4004:
case 1871:
case 2249:
case 3752:
case 2096:
case 3853:
case 2552:
case 1720:
case 3179:
case 2474:
case 59:
case 3222:
case 2067:
case 2088:
case 2095:
case 2568:
case 3787:
case 42:
case 3677:
case 3597:
case 17:
case 2237:
case 2582:
case 3883:
case 1515:
case 4042:
case 1365:
case 46:
case 3908:
case 3943:
case 2147:
case 3622:
case 1245:
case 3272:
case 1178:
case 1408:
case 3627:
case 3315:
case 2142:
case 1339:
case 159:
case 2101:
case 167:
case 1296:
case 178:
case 999:
case 3157:
case 411:
case 201:
case 2699:
case 3090:
case 3689:
case 2166:
case 1120:
case 2704:
case 681:
case 122:
case 3504:
case 693:
case 4001:
case 595:
case 2560:
case 1258:
case 2310:
case 238:
case 1170:
case 3729:
case 2529:
case 1811:
case 477:
case 468:
case 1658:
case 162:
case 2421:
case 1304:
case 3326:
case 3431:
case 2299:
case 465:
case 584:
case 2045:
case 794:
case 3048:
case 2328:
case 235:
case 3338:
case 3612:
case 3259:
case 1695:
case 2742:
case 1575:
case 8:
case 1778:
case 1667:
case 1688:
case 1347:
case 3168:
case 11:
case 1262:
case 2197:
case 3993:
case 1735:
case 3187:
case 1525:
case 1037:
case 175:
case 3217:
case 598:
case 3375:
case 2192:
case 4065:
case 3182:
case 1267:
case 1342:
case 1493:
case 2378:
case 3659:
case 3212:
case 98:
case 4057:
case 1453:
case 2090:
case 831:
case 1130:
case 2504:
case 452:
case 1536:
case 1726:
case 473:
case 1329:
case 1286:
case 58:
case 3101:
case 4052:
case 79:
case 3471:
case 1116:
case 2376:
case 2900:
case 1379:
case 3414:
case 3964:
case 1360:
case 3299:
case 3336:
case 984:
case 114:
case 1921:
case 3739:
case 239:
case 469:
case 457:
case 1240:
case 1834:
case 1686:
case 2542:
case 3843:
case 3742:
case 1685:
case 500:
case 2612:
case 2259:
case 1698:
case 1656:
case 2325:
case 3335:
case 805:
case 2048:
case 3328:
case 1022:
case 3192:
case 2182:
case 599:
case 2212:
case 3050:
case 995:
case 3197:
case 3983:
case 1535:
case 4082:
case 3165:
case 155:
case 2217:
case 1738:
case 1256:
case 1679:
case 2981:
case 3991:
case 104:
case 2894:
case 1355:
case 3610:
case 2019:
case 377:
case 1229:
case 1491:
case 861:
case 3399:
case 1260:
case 353:
case 854:
case 1016:
case 2755:
case 116:
case 4090:
case 2190:
case 3066:
case 943:
case 2676:
case 3944:
case 328:
case 3796:
case 2052:
case 3585:
case 1933:
case 2087:
case 3097:
case 1712:
case 542:
case 3788:
case 3065:
case 3678:
case 2588:
case 3767:
case 3598:
case 2082:
case 2238:
case 325:
case 1015:
case 3556:
case 3863:
case 750:
case 1385:
case 2312:
case 3278:
case 3145:
case 87:
case 2103:
case 2473:
case 2951:
case 1402:
case 3902:
case 3635:
case 2625:
case 1407:
case 4003:
case 365:
case 180:
case 3276:
case 2540:
case 277:
case 2610:
case 357:
case 268:
case 369:
case 1239:
case 438:
case 1799:
case 947:
case 132:
case 4046:
case 1358:
case 1589:
case 2991:
case 3626:
case 1069:
case 910:
case 2636:
case 3841:
case 2180:
case 2796:
case 2210:
case 329:
case 228:
case 2586:
case 3596:
case 2236:
case 352:
case 874:
case 1204:
case 253:
case 2001:
case 3389:
case 401:
case 3057:
case 2092:
case 2235:
case 3562:
case 2863:
case 3423:
case 2762:
case 3087:
case 2795:
case 1642:
case 1137:
case 3068:
case 2585:
case 3675:
case 543:
case 3359:
case 2678:
case 3588:
case 2767:
case 645:
case 741:
case 796:
case 586:
case 1973:
case 3317:
case 435:
case 2635:
case 1247:
case 265:
case 2628:
case 4045:
case 3103:
case 2145:
case 2278:
case 85:
case 1559:
case 3951:
case 3148:
case 1367:
case 3473:
case 1242:
case 4058:
case 1201:
case 1346:
case 402:
case 3186:
case 2780:
case 3790:
case 863:
case 2590:
case 3580:
case 351:
case 156:
case 660:
case 3155:
case 2941:
case 814:
case 996:
case 108:
case 1010:
case 823:
case 3984:
case 2994:
case 2881:
case 3891:
case 1380:
case 217:
case 131:
case 336:
case 407:
case 970:
case 879:
case 1484:
case 1199:
case 620:
case 2039:
case 1078:
case 1350:
case 2042:
case 3322:
case 26:
case 2332:
case 550:
case 855:
case 2618:
case 2548:
case 3545:
case 2503:
case 1692:
case 1572:
case 2047:
case 3703:
case 3327:
case 4095:
case 2162:
case 1297:
case 3377:
case 4067:
case 1732:
case 1292:
case 105:
case 2188:
case 1028:
case 3963:
case 3413:
case 2167:
case 3372:
case 1737:
case 1035:
case 3220:
case 2230:
case 426:
case 213:
case 4086:
case 3941:
case 312:
case 1549:
case 3196:
case 434:
case 403:
case 3004:
case 2060:
case 251:
case 3590:
case 2580:
case 862:
case 2790:
case 1652:
case 236:
case 1494:
case 466:
case 878:
case 2029:
case 2616:
case 224:
case 2984:
case 340:
case 3994:
case 3270:
case 3269:
case 1390:
case 2140:
case 875:
case 1159:
case 3618:
case 3047:
case 2615:
case 2703:
case 1873:
case 1682:
case 81:
case 3745:
case 2545:
case 3851:
case 3332:
case 36:
case 1075:
case 2954:
case 2807:
case 2322:
case 1348:
case 2963:
case 2413:
case 2215:
case 1282:
case 3195:
case 3218:
case 2185:
case 1537:
case 32:
case 541:
case 1268:
case 4085:
case 2377:
case 1:
case 2156:
case 3395:
case 2172:
case 3242:
case 1473:
case 3367:
case 1275:
case 3559:
case 3388:
case 2398:
case 3973:
case 2177:
case 1595:
case 1068:
case 30:
case 2933:
case 3137:
case 1567:
case 2717:
case 1082:
case 1238:
case 455:
case 3132:
case 791:
case 695:
case 783:
case 3517:
case 3018:
case 152:
case 3149:
case 2444:
case 173:
case 2016:
case 1755:
case 2279:
case 2629:
case 479:
case 698:
case 129:
case 458:
case 1786:
case 2599:
case 3358:
case 3589:
case 332:
case 802:
case 684:
case 1626:
case 3604:
case 169:
case 157:
case 380:
case 2229:
case 2386:
case 997:
case 2491:
case 2973:
case 2451:
case 1902:
case 2247:
case 2362:
case 1907:
case 787:
case 3385:
case 2395:
case 2559:
case 3402:
case 3759:
case 2242:
case 592:
case 475:
case 1556:
case 3122:
case 2517:
case 2647:
case 3015:
case 1863:
case 3712:
case 2642:
case 2923:
case 3127:
case 2512:
case 1767:
case 1678:
case 1788:
case 2020:
case 3629:
case 111:
case 1210:
case 1796:
case 459:
case 128:
case 699:
case 1586:
case 478:
case 422:
case 153:
case 3260:
case 1399:
case 3279:
case 993:
case 280:
case 1540:
case 177:
case 826:
case 168:
case 3491:
case 3386:
case 2396:
case 3229:
case 834:
case 3789:
case 2799:
case 232:
case 3599:
case 2358:
case 2589:
case 3355:
case 3660:
case 462:
case 2297:
case 47:
case 3287:
case 2463:
case 3:
case 2265:
case 205:
case 3348:
case 1167:
case 685:
case 3727:
case 2737:
case 1195:
case 546:
case 793:
case 2527:
case 2035:
case 2665:
case 2078:
case 2350:
case 3687:
case 2697:
case 16:
case 3668:
case 2454:
case 3159:
case 1548:
case 1503:
case 2692:
case 1047:
case 1994:
case 140:
case 3657:
case 1746:
case 117:
case 2601:
case 2380:
case 1269:
case 987:
case 3652:
case 1620:
case 2666:
case 3494:
case 3189:
case 390:
case 1004:
case 2346:
case 2036:
case 1196:
case 3441:
case 3257:
case 171:
case 1670:
case 1590:
case 1220:
case 376:
case 688:
case 1941:
case 208:
case 309:
case 839:
case 3252:
case 2010:
case 3619:
case 2348:
case 3028:
case 1198:
case 305:
case 1185:
case 3737:
case 1372:
case 2727:
case 3345:
case 2537:
case 2287:
case 2268:
case 3833:
case 3732:
case 1377:
case 3522:
case 1748:
case 3454:
case 1615:
case 1703:
case 3692:
case 1545:
case 2772:
case 3078:
case 3350:
case 3665:
case 2075:
case 1954:
case 797:
case 3577:
case 3697:
case 2076:
case 2189:
case 3199:
case 1029:
case 1616:
case 4089:
case 474:
case 331:
case 2390:
case 801:
case 3601:
case 1140:
case 689:
case 3266:
case 1230:
case 1155:
case 2619:
case 2252:
case 838:
case 3749:
case 308:
case 2549:
case 1186:
case 1060:
case 151:
case 1079:
case 1790:
case 1216:
case 3111:
case 882:
case 1500:
case 1476:
case 3124:
case 3869:
case 2429:
case 2291:
case 535:
case 830:
case 3531:
case 1939:
case 3721:
case 2731:
case 3976:
case 2644:
case 2353:
case 1161:
case 2514:
case 2364:
case 3681:
case 2936:
case 1904:
case 149:
case 2910:
case 2460:
case 3820:
case 1331:
case 298:
case 3404:
case 443:
case 1426:
case 887:
case 1753:
case 1438:
case 2607:
case 1868:
case 38:
case 3651:
case 1783:
case 2935:
case 501:
case 2602:
case 2815:
case 2928:
case 3251:
case 538:
case 3975:
case 1942:
case 2207:
case 1105:
case 3393:
case 2383:
case 1273:
case 3442:
case 1475:
case 3521:
case 200:
case 3514:
case 4011:
case 3644:
case 2870:
case 846:
case 891:
case 1371:
case 384:
case 2439:
case 632:
case 2124:
case 1321:
case 3830:
case 442:
case 1436:
case 398:
case 3109:
case 3460:
case 3910:
case 637:
case 3479:
case 1553:
case 1979:
case 4074:
case 1960:
case 1410:
case 3816:
case 2926:
case 702:
case 3815:
case 1583:
case 3602:
case 1793:
case 2818:
case 3013:
case 28:
case 1428:
case 3607:
case 1897:
case 1435:
case 1233:
case 2393:
case 3383:
case 1143:
case 3202:
case 1108:
case 1633:
case 1054:
case 2251:
case 2447:
case 3978:
case 3207:
case 2684:
case 3574:
case 4071:
case 1420:
case 1957:
case 3826:
case 2916:
case 2509:
case 2401:
case 608:
case 1324:
case 3241:
case 288:
case 389:
case 3920:
case 2930:
case 496:
case 735:
case 3969:
case 892:
case 2121:
case 3294:
case 3131:
case 1081:
case 2724:
case 3876:
case 120:
case 1506:
case 907:
case 4021:
case 3734:
case 470:
case 2711:
case 3641:
case 1100:
case 4014:
case 566:
case 1051:
case 1708:
case 3875:
case 1743:
case 738:
case 2308:
case 1987:
case 2033:
case 3023:
case 39:
case 1418:
case 14:
case 3468:
case 3838:
case 3487:
case 534:
case 2263:
case 2835:
case 605:
case 2465:
case 1982:
case 503:
case 2241:
case 926:
case 609:
case 3810:
case 676:
case 2457:
case 388:
case 1966:
case 1153:
case 903:
case 2826:
case 3916:
case 1860:
case 1430:
case 2361:
case 2694:
case 3509:
case 1879:
case 2734:
case 144:
case 450:
case 2876:
case 690:
case 4031:
case 2511:
case 966:
case 1761:
case 3114:
case 1091:
case 1309:
case 3284:
case 394:
case 3663:
case 1002:
case 3878:
case 3254:
case 1705:
case 2487:
case 2838:
case 2918:
case 1992:
case 3835:
case 3263:
case 2482:
case 2023:
case 29:
case 1997:
case 2623:
case 2942:
case 1207:
case 4005:
case 3108:
case 1202:
case 2438:
case 559:
case 1607:
case 3865:
case 3233:
case 3435:
case 1935:
case 2783:
case 2882:
case 1815:
case 955:
case 522:
case 3063:
case 1364:
case 1691:
case 1571:
case 575:
case 1936:
case 492:
case 3410:
case 75:
case 1460:
case 1109:
case 3866:
case 198:
case 1244:
case 870:
case 906:
case 2041:
case 1830:
case 3321:
case 2852:
case 3564:
case 184:
case 3371:
case 2764:
case 3700:
case 1429:
case 3084:
case 2094:
case 1731:
case 1521:
case 1644:
case 914:
case 896:
case 669:
case 2161:
case 3105:
case 3947:
case 2108:
case 3475:
case 3273:
case 514:
case 2054:
case 1975:
case 3623:
case 4043:
case 1925:
case 3882:
case 3673:
case 2583:
case 3783:
case 2793:
case 625:
case 721:
case 579:
case 3887:
case 2897:
case 558:
case 1651:
case 506:
case 3223:
case 3041:
case 2866:
case 3426:
case 850:
case 3331:
case 2314:
case 3753:
case 978:
case 715:
case 3852:
case 959:
case 967:
case 2979:
case 1300:
case 672:
case 2960:
case 1926:
case 349:
case 493:
case 653:
case 248:
case 481:
case 927:
case 100:
case 1531:
case 3161:
case 677:
case 3764:
case 1111:
case 962:
case 2084:
case 3094:
case 1869:
case 1308:
case 3415:
case 97:
case 3213:
case 3183:
case 1033:
case 1343:
case 62:
case 759:
case 24:
case 185:
case 722:
case 1835:
case 1915:
case 2982:
case 3992:
case 3508:
case 727:
case 3613:
case 2842:
case 3543:
case 1663:
case 2847:
case 762:
case 2561:
case 1114:
case 617:
case 2081:
case 3091:
case 2470:
case 1724:
case 487:
case 344:
case 886:
case 2839:
case 3829:
case 3164:
case 2100:
case 1836:
case 671:
case 775:
case 2957:
case 3153:
case 921:
case 3901:
case 2952:
case 430:
case 3334:
case 3044:
case 3966:
case 1930:
case 1171:
case 4083:
case 1838:
case 521:
case 1468:
case 518:
case 95:
case 2965:
case 706:
case 1482:
case 1305:
case 19:
case 3418:
case 1023:
case 2183:
case 3987:
case 2997:
case 561:
case 1073:
case 3051:
case 3505:
case 714:
case 1875:
case 842:
case 1524:
case 244:
case 320:
case 1876:
case 2706:
case 636:
case 3100:
case 1511:
case 3919:
case 1969:
case 1419:
case 3374:
case 4064:
case 2309:
case 1970:
case 2091:
case 1131:
case 1241:
case 515:
case 3952:
case 3311:
case 1920:
case 189:
case 2966:
case 1457:
case 2153:
case 3804:
case 3420:
case 1694:
case 755:
case 491:
case 446:
case 1452:
case 810:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1752768001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,];
var gg_b = "1752768001/";

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
