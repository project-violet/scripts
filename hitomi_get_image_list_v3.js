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
case 3470:
case 3474:
case 1358:
case 1481:
case 320:
case 2637:
case 3034:
case 3018:
case 971:
case 615:
case 27:
case 2038:
case 1816:
case 1492:
case 3556:
case 3617:
case 3956:
case 949:
case 2894:
case 150:
case 823:
case 3194:
case 1096:
case 1079:
case 1949:
case 332:
case 676:
case 1172:
case 3898:
case 623:
case 917:
case 1256:
case 1549:
case 3933:
case 1297:
case 2251:
case 2337:
case 2091:
case 175:
case 3317:
case 3889:
case 1780:
case 1233:
case 1355:
case 116:
case 297:
case 1022:
case 3015:
case 2035:
case 3802:
case 2720:
case 3831:
case 2486:
case 2131:
case 204:
case 791:
case 2821:
case 3718:
case 3207:
case 1012:
case 3025:
case 3264:
case 2490:
case 1583:
case 4061:
case 20:
case 3673:
case 1507:
case 1564:
case 1881:
case 3874:
case 1779:
case 2523:
case 2923:
case 1416:
case 3344:
case 2782:
case 3541:
case 2345:
case 698:
case 129:
case 440:
case 658:
case 3941:
case 556:
case 3175:
case 2886:
case 2875:
case 3431:
case 1080:
case 1757:
case 3186:
case 858:
case 714:
case 1084:
case 3071:
case 1063:
case 3373:
case 399:
case 1722:
case 1167:
case 2666:
case 2977:
case 1100:
case 1104:
case 972:
case 359:
case 2265:
case 3495:
case 2143:
case 274:
case 2735:
case 2047:
case 1735:
case 1143:
case 571:
case 3108:
case 1024:
case 3804:
case 2241:
case 2100:
case 1666:
case 1648:
case 1577:
case 2722:
case 3565:
case 1791:
case 2757:
case 3687:
case 1875:
case 3088:
case 978:
case 1411:
case 1345:
case 706:
case 3946:
case 2416:
case 2892:
case 3968:
case 3546:
case 814:
case 2796:
case 614:
case 419:
case 1170:
case 3099:
case 2960:
case 2964:
case 1366:
case 1174:
case 2560:
case 2507:
case 2881:
case 2564:
case 1246:
case 3001:
case 1559:
case 1710:
case 1738:
case 3032:
case 2805:
case 3387:
case 1268:
case 3105:
case 1494:
case 1490:
case 4045:
case 163:
case 2012:
case 1821:
case 3213:
case 1131:
case 1486:
case 3829:
case 1475:
case 1720:
case 669:
case 1747:
case 715:
case 1035:
case 197:
case 216:
case 3951:
case 1811:
case 2355:
case 1913:
case 1195:
case 2784:
case 2780:
case 3650:
case 2408:
case 368:
case 1513:
case 776:
case 589:
case 61:
case 3404:
case 1562:
case 956:
case 2172:
case 434:
case 3872:
case 3419:
case 2949:
case 1421:
case 2439:
case 290:
case 2655:
case 3785:
case 487:
case 4093:
case 1890:
case 1894:
case 3799:
case 3342:
case 3732:
case 1478:
case 3116:
case 338:
case 3701:
case 1038:
case 17:
case 572:
case 2492:
case 1637:
case 473:
case 2358:
case 691:
case 4037:
case 2712:
case 4074:
case 1797:
case 664:
case 3563:
case 469:
case 1670:
case 2367:
case 1280:
case 1145:
case 537:
case 2588:
case 3455:
case 113:
case 3206:
case 1041:
case 1733:
case 2220:
case 2065:
case 2224:
case 3605:
case 41:
case 2247:
case 1971:
case 2161:
case 1148:
case 2599:
case 2576:
case 2803:
case 3381:
case 370:
case 634:
case 2985:
case 2600:
case 2976:
case 2667:
case 1166:
case 3064:
case 2604:
case 3225:
case 1643:
case 2450:
case 1827:
case 3608:
case 3626:
case 2068:
case 2046:
case 248:
case 687:
case 3392:
case 1844:
case 3339:
case 1852:
case 3512:
case 780:
case 873:
case 1469:
case 3912:
case 985:
case 3187:
case 3305:
case 451:
case 2887:
case 2901:
case 3083:
case 142:
case 626:
case 2155:
case 3522:
case 1515:
case 593:
case 3922:
case 1915:
case 1193:
case 236:
case 2051:
case 735:
case 452:
case 2329:
case 141:
case 1257:
case 492:
case 2209:
case 1033:
case 1741:
case 3215:
case 1137:
case 63:
case 1473:
case 3557:
case 1817:
case 2235:
case 3957:
case 2765:
case 945:
case 3996:
case 3142:
case 1869:
case 3764:
case 3760:
case 3707:
case 3218:
case 300:
case 3230:
case 266:
case 3596:
case 3234:
case 2210:
case 182:
case 765:
case 3049:
case 1398:
case 2629:
case 960:
case 2768:
case 1530:
case 2158:
case 1518:
case 3858:
case 1918:
case 847:
case 1930:
case 1934:
case 66:
case 2336:
case 86:
case 3316:
case 647:
case 4089:
case 1695:
case 2:
case 2427:
case 3759:
case 1854:
case 2695:
case 835:
case 3938:
case 188:
case 2440:
case 2444:
case 1403:
case 1336:
case 3448:
case 635:
case 2918:
case 2518:
case 1768:
case 2398:
case 2631:
case 1238:
case 3062:
case 1210:
case 4029:
case 166:
case 406:
case 3611:
case 2869:
case 3390:
case 2389:
case 124:
case 498:
case 3591:
case 640:
case 458:
case 865:
case 1636:
case 3982:
case 2222:
case 719:
case 665:
case 2033:
case 4036:
case 2741:
case 3582:
case 967:
case 1329:
case 2331:
case 1291:
case 585:
case 1672:
case 2302:
case 747:
case 1282:
case 136:
case 3509:
case 2915:
case 703:
case 3311:
case 3777:
case 94:
case 928:
case 3694:
case 1155:
case 3690:
case 2097:
case 3909:
case 1532:
case 993:
case 39:
case 1901:
case 764:
case 3686:
case 2756:
case 415:
case 3299:
case 2925:
case 3285:
case 2469:
case 2852:
case 3321:
case 2844:
case 3201:
case 3144:
case 3762:
case 1068:
case 3378:
case 3232:
case 2643:
case 2827:
case 1600:
case 2212:
case 1604:
case 2370:
case 3866:
case 1985:
case 4067:
case 423:
case 3848:
case 2148:
case 2971:
case 2571:
case 3375:
case 1220:
case 1224:
case 1065:
case 311:
case 3386:
case 2733:
case 3845:
case 1588:
case 560:
case 2145:
case 3493:
case 2417:
case 3947:
case 225:
case 3524:
case 680:
case 3547:
case 2280:
case 2906:
case 2797:
case 3288:
case 726:
case 2873:
case 2705:
case 358:
case 3954:
case 1613:
case 1810:
case 222:
case 1814:
case 398:
case 2558:
case 1134:
case 1130:
case 3036:
case 3499:
case 3485:
case 631:
case 454:
case 2349:
case 699:
case 494:
case 899:
case 3651:
case 2781:
case 230:
case 407:
case 2879:
case 859:
case 1090:
case 1424:
case 861:
case 2857:
case 3053:
case 525:
case 9:
case 1937:
case 3293:
case 509:
case 661:
case 184:
case 2726:
case 3029:
case 2480:
case 4062:
case 2649:
case 2217:
case 1662:
case 2822:
case 137:
case 3237:
case 746:
case 260:
case 2555:
case 1115:
case 3122:
case 1593:
case 513:
case 1011:
case 1809:
case 3488:
case 3019:
case 3587:
case 2716:
case 2383:
case 2244:
case 2101:
case 411:
case 18:
case 582:
case 3112:
case 2496:
case 2479:
case 3736:
case 483:
case 1021:
case 2092:
case 1438:
case 1414:
case 3772:
case 1078:
case 1287:
case 2307:
case 2199:
case 2176:
case 2364:
case 1966:
case 1794:
case 2185:
case 1790:
case 3503:
case 2252:
case 4077:
case 3903:
case 1435:
case 4059:
case 45:
case 2961:
case 1075:
case 1659:
case 2561:
case 3365:
case 3184:
case 1086:
case 1545:
case 1409:
case 2273:
case 786:
case 579:
case 1945:
case 2422:
case 820:
case 832:
case 768:
case 3646:
case 4023:
case 2008:
case 2457:
case 1820:
case 3729:
case 1824:
case 2664:
case 1377:
case 323:
case 1128:
case 3000:
case 3067:
case 948:
case 376:
case 632:
case 3163:
case 1482:
case 3245:
case 2863:
case 339:
case 4007:
case 3806:
case 2711:
case 2377:
case 470:
case 1664:
case 524:
case 1457:
case 2820:
case 2824:
case 3043:
case 121:
case 3124:
case 3702:
case 3147:
case 3415:
case 1422:
case 3341:
case 942:
case 293:
case 3795:
case 244:
case 2075:
case 1884:
case 2171:
case 185:
case 369:
case 3418:
case 2948:
case 2566:
case 3430:
case 925:
case 2790:
case 3074:
case 1307:
case 1360:
case 3070:
case 2677:
case 2287:
case 3540:
case 2078:
case 3927:
case 3944:
case 2414:
case 1092:
case 2323:
case 588:
case 668:
case 981:
case 1496:
case 1479:
case 1812:
case 3641:
case 1132:
case 2359:
case 1716:
case 1383:
case 28:
case 1101:
case 1240:
case 31:
case 732:
case 455:
case 868:
case 1955:
case 2593:
case 2115:
case 2993:
case 3815:
case 145:
case 3002:
case 1649:
case 3135:
case 1484:
case 1480:
case 3031:
case 4049:
case 284:
case 3333:
case 3428:
case 2937:
case 3095:
case 3517:
case 2775:
case 3258:
case 2094:
case 1896:
case 1781:
case 2362:
case 228:
case 392:
case 1792:
case 2254:
case 2242:
case 3633:
case 3830:
case 846:
case 2118:
case 1558:
case 3818:
case 2130:
case 3114:
case 2838:
case 548:
case 2810:
case 52:
case 3356:
case 2613:
case 3347:
case 600:
case 1286:
case 3324:
case 1685:
case 3877:
case 2328:
case 2306:
case 1904:
case 1967:
case 1900:
case 1504:
case 1500:
case 2073:
case 2371:
case 4032:
case 1601:
case 36:
case 818:
case 963:
case 1865:
case 4001:
case 1632:
case 794:
case 201:
case 3975:
case 2226:
case 1388:
case 2841:
case 2497:
case 3204:
case 743:
case 3200:
case 303:
case 618:
case 516:
case 3823:
case 3219:
case 1846:
case 2123:
case 1868:
case 3978:
case 3620:
case 2027:
case 2769:
case 1385:
case 1376:
case 1399:
case 1160:
case 3066:
case 974:
case 2239:
case 3048:
case 1221:
case 1003:
case 3462:
case 933:
case 2292:
case 33:
case 712:
case 1332:
case 1519:
case 2159:
case 1278:
case 1688:
case 3521:
case 446:
case 3921:
case 590:
case 2052:
case 2931:
case 1465:
case 2502:
case 670:
case 1529:
case 3335:
case 387:
case 529:
case 3197:
case 3309:
case 3229:
case 271:
case 2113:
case 3610:
case 3638:
case 3391:
case 3745:
case 2618:
case 326:
case 3477:
case 1211:
case 97:
case 2998:
case 364:
case 3459:
case 1572:
case 957:
case 2216:
case 2744:
case 3635:
case 1149:
case 2598:
case 202:
case 3590:
case 110:
case 3236:
case 3609:
case 2069:
case 3766:
case 1042:
case 1050:
case 3156:
case 1054:
case 2856:
case 3310:
case 3272:
case 108:
case 3338:
case 2318:
case 2330:
case 2752:
case 1536:
case 1294:
case 655:
case 3464:
case 975:
case 611:
case 2536:
case 1752:
case 1334:
case 2468:
case 1856:
case 3516:
case 683:
case 3298:
case 3657:
case 1069:
case 4015:
case 2703:
case 877:
case 1615:
case 3622:
case 2972:
case 1744:
case 3483:
case 1727:
case 462:
case 916:
case 2572:
case 1998:
case 4034:
case 4030:
case 2211:
case 420:
case 1630:
case 1618:
case 1589:
case 3761:
case 89:
case 1989:
case 3357:
case 533:
case 1441:
case 3055:
case 1773:
case 117:
case 296:
case 1315:
case 2851:
case 1531:
case 795:
case 1902:
case 950:
case 755:
case 2465:
case 990:
case 2929:
case 3295:
case 1281:
case 700:
case 3939:
case 1159:
case 2278:
case 2754:
case 2087:
case 3680:
case 2750:
case 3883:
case 2919:
case 1292:
case 431:
case 365:
case 2301:
case 2183:
case 459:
case 3981:
case 3663:
case 1574:
case 1239:
case 2164:
case 2376:
case 1628:
case 1970:
case 3807:
case 3860:
case 2385:
case 843:
case 3168:
case 643:
case 1456:
case 2868:
case 57:
case 1040:
case 854:
case 718:
case 4025:
case 597:
case 1625:
case 557:
case 2388:
case 3165:
case 1226:
case 504:
case 3380:
case 3384:
case 335:
case 461:
case 612:
case 1073:
case 189:
case 2500:
case 1306:
case 2904:
case 2967:
case 3755:
case 2275:
case 3908:
case 2286:
case 1943:
case 812:
case 3508:
case 1476:
case 2633:
case 3242:
case 1485:
case 3134:
case 1036:
case 3130:
case 605:
case 1550:
case 1554:
case 1719:
case 629:
case 3838:
case 198:
case 424:
case 3613:
case 1954:
case 4051:
case 436:
case 954:
case 1942:
case 763:
case 3090:
case 1179:
case 1196:
case 2969:
case 3094:
case 1651:
case 367:
case 1542:
case 994:
case 70:
case 943:
case 292:
case 907:
case 2098:
case 1432:
case 2333:
case 2406:
case 3537:
case 2255:
case 2182:
case 3882:
case 4:
case 1053:
case 3447:
case 3775:
case 3313:
case 2656:
case 774:
case 1157:
case 3786:
case 2095:
case 1700:
case 466:
case 912:
case 1704:
case 2109:
case 1488:
case 2397:
case 2815:
case 1237:
case 3115:
case 1122:
case 2471:
case 3835:
case 595:
case 384:
case 555:
case 1029:
case 2743:
case 2031:
case 2952:
case 500:
case 1736:
case 3203:
case 1248:
case 3021:
case 2552:
case 1832:
case 875:
case 38:
case 2434:
case 2430:
case 1903:
case 2418:
case 3966:
case 1876:
case 1503:
case 3790:
case 977:
case 2544:
case 3323:
case 77:
case 518:
case 1346:
case 1772:
case 2944:
case 3410:
case 2940:
case 3945:
case 95:
case 99:
case 3545:
case 393:
case 757:
case 3075:
case 1365:
case 2789:
case 1184:
case 291:
case 704:
case 3435:
case 2871:
case 115:
case 3171:
case 1753:
case 176:
case 3482:
case 2973:
case 890:
case 3711:
case 1067:
case 3128:
case 123:
case 3106:
case 2573:
case 1668:
case 2120:
case 3824:
case 1729:
case 2043:
case 3847:
case 3491:
case 4068:
case 2702:
case 2261:
case 2147:
case 2646:
case 1147:
case 1261:
case 321:
case 970:
case 1124:
case 1120:
case 3008:
case 2668:
case 1806:
case 1573:
case 3664:
case 2004:
case 2000:
case 3607:
case 223:
case 139:
case 276:
case 2163:
case 3683:
case 3961:
case 87:
case 1871:
case 2180:
case 3880:
case 3561:
case 3884:
case 442:
case 3188:
case 2888:
case 507:
case 3273:
case 67:
case 716:
case 2772:
case 2346:
case 1944:
case 1527:
case 1798:
case 657:
case 804:
case 1540:
case 2899:
case 3185:
case 3360:
case 1074:
case 857:
case 3199:
case 1070:
case 3364:
case 897:
case 3252:
case 1430:
case 3244:
case 3240:
case 3101:
case 2801:
case 481:
case 512:
case 2587:
case 3005:
case 3479:
case 3812:
case 3496:
case 1825:
case 750:
case 1641:
case 2266:
case 3039:
case 2248:
case 955:
case 2736:
case 413:
case 482:
case 3484:
case 1743:
case 511:
case 2029:
case 900:
case 345:
case 1002:
case 3649:
case 360:
case 2237:
case 2351:
case 3955:
case 2767:
case 2700:
case 2157:
case 1656:
case 1095:
case 1089:
case 1517:
case 80:
case 4056:
case 2053:
case 2293:
case 60:
case 577:
case 918:
case 1428:
case 1406:
case 1098:
case 2432:
case 55:
case 874:
case 2072:
case 3792:
case 2542:
case 2651:
case 1569:
case 3781:
case 1258:
case 2196:
case 479:
case 2942:
case 3412:
case 2954:
case 1356:
case 633:
case 1110:
case 2550:
case 2719:
case 2554:
case 1830:
case 2036:
case 4033:
case 2485:
case 3958:
case 682:
case 3504:
case 119:
case 3904:
case 3900:
case 3699:
case 3967:
case 1413:
case 2908:
case 2926:
case 1347:
case 2508:
case 2526:
case 1045:
case 3451:
case 463:
case 3388:
case 1141:
case 2612:
case 1267:
case 2243:
case 2384:
case 3865:
case 1975:
case 40:
case 562:
case 16:
case 1586:
case 3003:
case 879:
case 2864:
case 3385:
case 641:
case 3164:
case 3376:
case 3399:
case 3107:
case 2592:
case 1624:
case 841:
case 1978:
case 1620:
case 474:
case 679:
case 1647:
case 3846:
case 1219:
case 4024:
case 2992:
case 4020:
case 2939:
case 1921:
case 433:
case 240:
case 766:
case 3688:
case 2539:
case 2312:
case 2270:
case 0:
case 1521:
case 3519:
case 3750:
case 3087:
case 946:
case 3301:
case 1462:
case 3183:
case 3919:
case 532:
case 2679:
case 1197:
case 356:
case 2055:
case 1309:
case 1093:
case 2322:
case 1253:
case 3929:
case 531:
case 3465:
case 2289:
case 1477:
case 1745:
case 1037:
case 2761:
case 2202:
case 1610:
case 1229:
case 4014:
case 4010:
case 47:
case 2379:
case 3042:
case 280:
case 4009:
case 625:
case 2622:
case 310:
case 1594:
case 609:
case 404:
case 3972:
case 2849:
case 2483:
case 3149:
case 986:
case 561:
case 164:
case 4035:
case 1459:
case 2058:
case 3290:
case 968:
case 3294:
case 813:
case 2460:
case 3936:
case 1310:
case 308:
case 3446:
case 72:
case 2657:
case 3050:
case 2516:
case 1657:
case 2423:
case 4057:
case 2314:
case 3330:
case 3334:
case 3752:
case 3318:
case 1407:
case 3727:
case 2459:
case 264:
case 2635:
case 2862:
case 742:
case 302:
case 3740:
case 3162:
case 1483:
case 3216:
case 3615:
case 180:
case 2766:
case 2990:
case 2609:
case 2994:
case 1379:
case 4022:
case 3989:
case 2813:
case 2229:
case 1357:
case 3995:
case 1231:
case 3595:
case 2638:
case 2614:
case 725:
case 2610:
case 3634:
case 2382:
case 226:
case 2037:
case 2745:
case 781:
case 3931:
case 2335:
case 82:
case 3902:
case 3773:
case 546:
case 62:
case 317:
case 2093:
case 1322:
case 287:
case 648:
case 450:
case 490:
case 1696:
case 3292:
case 1883:
case 1449:
case 165:
case 782:
case 2462:
case 4080:
case 3671:
case 824:
case 3159:
case 1684:
case 405:
case 1274:
case 1312:
case 3325:
case 624:
case 3052:
case 3281:
case 1939:
case 931:
case 372:
case 636:
case 3044:
case 1146:
case 2647:
case 538:
case 3040:
case 2624:
case 1168:
case 3027:
case 2620:
case 3456:
case 3974:
case 3606:
case 3970:
case 1807:
case 3769:
case 1864:
case 3239:
case 836:
case 3574:
case 26:
case 3371:
case 1061:
case 3208:
case 1380:
case 8:
case 2986:
case 3625:
case 2204:
case 6:
case 203:
case 2141:
case 2737:
case 666:
case 2347:
case 2320:
case 2324:
case 3306:
case 3433:
case 2877:
case 527:
case 219:
case 866:
case 2793:
case 844:
case 4017:
case 2354:
case 3816:
case 1617:
case 471:
case 238:
case 3136:
case 853:
case 1030:
case 1474:
case 3712:
case 893:
case 449:
case 3405:
case 132:
case 390:
case 3439:
case 2342:
case 2785:
case 350:
case 3079:
case 3408:
case 3426:
case 1895:
case 721:
case 1889:
case 1443:
case 2650:
case 3780:
case 3057:
case 2853:
case 1317:
case 3153:
case 227:
case 519:
case 68:
case 2467:
case 2400:
case 2404:
case 3658:
case 3297:
case 402:
case 3129:
case 56:
case 785:
case 1802:
case 1597:
case 2951:
case 3022:
case 2642:
case 1706:
case 1728:
case 1997:
case 3355:
case 3119:
case 2001:
case 3661:
case 2105:
case 161:
case 3805:
case 1498:
case 3012:
case 1260:
case 1025:
case 1734:
case 1352:
case 1730:
case 1121:
case 1718:
case 637:
case 2946:
case 1344:
case 3416:
case 1178:
case 2546:
case 1327:
case 884:
case 3907:
case 2076:
case 4073:
case 3960:
case 684:
case 3796:
case 1870:
case 2181:
case 3881:
case 745:
case 3361:
case 305:
case 2565:
case 940:
case 2965:
case 1186:
case 534:
case 3084:
case 131:
case 2277:
case 760:
case 587:
case 329:
case 828:
case 1640:
case 2453:
case 84:
case 1627:
case 2126:
case 1843:
case 4040:
case 1495:
case 3826:
case 3808:
case 1028:
case 3100:
case 1006:
case 3167:
case 159:
case 2804:
case 2800:
case 2867:
case 2603:
case 3063:
case 526:
case 1373:
case 628:
case 199:
case 3648:
case 299:
case 830:
case 2373:
case 3709:
case 1867:
case 4003:
case 2028:
case 3977:
case 259:
case 3143:
case 374:
case 2627:
case 3024:
case 2489:
case 2640:
case 2644:
case 1453:
case 3735:
case 630:
case 2541:
case 146:
case 3782:
case 737:
case 1088:
case 2941:
case 1277:
case 93:
case 333:
case 3875:
case 478:
case 1429:
case 2175:
case 2402:
case 2071:
case 4087:
case 1565:
case 3791:
case 645:
case 1436:
case 1181:
case 2673:
case 2874:
case 1085:
case 1099:
case 3170:
case 3366:
case 3523:
case 1968:
case 1259:
case 2178:
case 2344:
case 1568:
case 3923:
case 845:
case 580:
case 2718:
case 2352:
case 767:
case 2260:
case 2207:
case 96:
case 1387:
case 3268:
case 3959:
case 1105:
case 1472:
case 3559:
case 3714:
case 3710:
case 903:
case 357:
case 3009:
case 2669:
case 1551:
case 2111:
case 753:
case 3393:
case 964:
case 2015:
case 397:
case 4042:
case 1951:
case 2597:
case 3747:
case 535:
case 262:
case 3035:
case 3486:
case 744:
case 1213:
case 3720:
case 1788:
case 2933:
case 127:
case 3251:
case 168:
case 3513:
case 2443:
case 408:
case 3913:
case 2895:
case 2369:
case 2194:
case 1342:
case 1776:
case 456:
case 3693:
case 232:
case 1872:
case 3198:
case 987:
case 2898:
case 3562:
case 2470:
case 2725:
case 685:
case 220:
case 2034:
case 1262:
case 2617:
case 1116:
case 3010:
case 1701:
case 3014:
case 138:
case 37:
case 3038:
case 973:
case 2556:
case 1350:
case 1732:
case 2947:
case 1271:
case 325:
case 1692:
case 3284:
case 3343:
case 2678:
case 1326:
case 4092:
case 2288:
case 1563:
case 3670:
case 4081:
case 3928:
case 3906:
case 2077:
case 810:
case 309:
case 3873:
case 749:
case 1963:
case 2173:
case 3971:
case 808:
case 1580:
case 4005:
case 1584:
case 1984:
case 2386:
case 3571:
case 2375:
case 1605:
case 4039:
case 313:
case 1228:
case 91:
case 3733:
case 2621:
case 608:
case 1639:
case 3145:
case 3263:
case 717:
case 506:
case 598:
case 2762:
case 3844:
case 3840:
case 939:
case 656:
case 3827:
case 1626:
case 2127:
case 2866:
case 3374:
case 3212:
case 3370:
case 1064:
case 3148:
case 1083:
case 342:
case 3756:
case 2686:
case 1187:
case 25:
case 485:
case 1305:
case 2059:
case 2285:
case 3852:
case 1339:
case 2152:
case 294:
case 3257:
case 3331:
case 1461:
case 515:
case 3302:
case 952:
case 379:
case 1922:
case 3193:
case 2893:
case 2909:
case 992:
case 430:
case 2311:
case 2591:
case 3389:
case 1616:
case 2117:
case 3817:
case 1557:
case 878:
case 2837:
case 3473:
case 3033:
case 523:
case 3398:
case 445:
case 2062:
case 212:
case 914:
case 1230:
case 3452:
case 1596:
case 1579:
case 2394:
case 460:
case 3695:
case 1154:
case 3056:
case 1150:
case 3427:
case 2510:
case 2759:
case 2514:
case 3440:
case 2910:
case 1783:
case 2914:
case 772:
case 3930:
case 3530:
case 3296:
case 601:
case 3158:
case 3403:
case 1448:
case 1910:
case 2316:
case 3850:
case 801:
case 1514:
case 1759:
case 1538:
case 2150:
case 2142:
case 1611:
case 2764:
case 2707:
case 437:
case 1390:
case 3842:
case 1169:
case 1394:
case 200:
case 2596:
case 2579:
case 889:
case 51:
case 3238:
case 689:
case 484:
case 3210:
case 778:
case 3768:
case 3209:
case 1837:
case 2215:
case 2557:
case 1991:
case 1117:
case 2616:
case 3765:
case 1591:
case 143:
case 2522:
case 2855:
case 1311:
case 3282:
case 1893:
case 1509:
case 3051:
case 4094:
case 2922:
case 154:
case 551:
case 3291:
case 3672:
case 872:
case 194:
case 1321:
case 1299:
case 915:
case 671:
case 2305:
case 1059:
case 15:
case 552:
case 3319:
case 3532:
case 4075:
case 19:
case 2103:
case 3585:
case 3599:
case 3803:
case 3999:
case 3667:
case 2064:
case 2225:
case 3604:
case 1127:
case 2608:
case 976:
case 1378:
case 1232:
case 2392:
case 708:
case 1140:
case 348:
case 796:
case 3588:
case 1493:
case 2228:
case 3988:
case 2455:
case 183:
case 3220:
case 3065:
case 2605:
case 1713:
case 514:
case 1386:
case 2580:
case 2584:
case 2861:
case 3247:
case 295:
case 1173:
case 2681:
case 3751:
case 1437:
case 177:
case 1077:
case 3367:
case 1920:
case 1678:
case 1547:
case 2308:
case 4078:
case 2271:
case 1947:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1749614402/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,];
var gg_b = "1749614402/";

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
