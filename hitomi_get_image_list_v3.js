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
case 601:
case 4002:
case 1837:
case 3921:
case 3945:
case 802:
case 916:
case 3355:
case 366:
case 2011:
case 731:
case 850:
case 1985:
case 3705:
case 3153:
case 536:
case 3727:
case 4074:
case 415:
case 94:
case 3647:
case 3477:
case 1860:
case 3592:
case 1610:
case 3300:
case 355:
case 3079:
case 4005:
case 3942:
case 3141:
case 3938:
case 50:
case 1240:
case 3352:
case 3026:
case 2237:
case 3097:
case 789:
case 1869:
case 3028:
case 3702:
case 1982:
case 3309:
case 3424:
case 2260:
case 569:
case 3323:
case 933:
case 2984:
case 967:
case 1913:
case 3573:
case 2952:
case 2151:
case 1036:
case 1042:
case 1979:
case 2539:
case 889:
case 1038:
case 1135:
case 1608:
case 1997:
case 1926:
case 1064:
case 2676:
case 322:
case 3318:
case 2342:
case 2463:
case 615:
case 2678:
case 3316:
case 1466:
case 991:
case 1443:
case 1954:
case 2923:
case 1769:
case 2044:
case 3384:
case 3802:
case 1468:
case 3275:
case 2062:
case 1434:
case 2033:
case 3293:
case 25:
case 429:
case 3850:
case 831:
case 1021:
case 657:
case 3188:
case 793:
case 3186:
case 1931:
case 1146:
case 1132:
case 2435:
case 2345:
case 1501:
case 3896:
case 3898:
case 3415:
case 598:
case 3510:
case 273:
case 2168:
case 1547:
case 2900:
case 3587:
case 2657:
case 2134:
case 254:
case 3114:
case 774:
case 2094:
case 558:
case 1475:
case 1531:
case 1102:
case 1901:
case 2214:
case 196:
case 3266:
case 1725:
case 1394:
case 1741:
case 2555:
case 424:
case 753:
case 294:
case 142:
case 105:
case 2020:
case 582:
case 1092:
case 2104:
case 1707:
case 3835:
case 2288:
case 2930:
case 2799:
case 2665:
case 177:
case 2496:
case 2500:
case 1570:
case 2286:
case 1642:
case 1636:
case 1376:
case 2459:
case 2308:
case 2175:
case 1472:
case 2756:
case 2402:
case 826:
case 77:
case 42:
case 2790:
case 4081:
case 2939:
case 2509:
case 1329:
case 3682:
case 1814:
case 985:
case 2883:
case 3919:
case 259:
case 1579:
case 1073:
case 212:
case 1095:
case 2003:
case 1404:
case 29:
case 3832:
case 2724:
case 2395:
case 1753:
case 2373:
case 3251:
case 1127:
case 1198:
case 951:
case 1554:
case 1303:
case 2523:
case 1261:
case 2824:
case 1853:
case 3449:
case 2207:
case 2712:
case 3748:
case 3697:
case 3626:
case 3160:
case 87:
case 1786:
case 3906:
case 1019:
case 1489:
case 3542:
case 2890:
case 3654:
case 3995:
case 1513:
case 3973:
case 975:
case 497:
case 2117:
case 907:
case 111:
case 33:
case 661:
case 564:
case 890:
case 547:
case 1585:
case 3001:
case 4048:
case 306:
case 1224:
case 3367:
case 3631:
case 874:
case 3521:
case 4032:
case 4046:
case 3545:
case 3992:
case 3330:
case 3670:
case 395:
case 62:
case 1841:
case 1417:
case 3047:
case 343:
case 3169:
case 1010:
case 304:
case 2841:
case 2825:
case 238:
case 876:
case 3565:
case 3957:
case 3030:
case 47:
case 2010:
case 108:
case 786:
case 3067:
case 336:
case 3994:
case 180:
case 761:
case 540:
case 3751:
case 1877:
case 3460:
case 2224:
case 1611:
case 555:
case 1189:
case 3301:
case 1890:
case 3734:
case 3140:
case 952:
case 2822:
case 2513:
case 30:
case 3903:
case 462:
case 1783:
case 1225:
case 1241:
case 68:
case 313:
case 3743:
case 1858:
case 211:
case 474:
case 2853:
case 2261:
case 369:
case 988:
case 1712:
case 1319:
case 4051:
case 2788:
case 127:
case 2299:
case 919:
case 2019:
case 626:
case 2786:
case 220:
case 1518:
case 3978:
case 2073:
case 3235:
case 1644:
case 1003:
case 2215:
case 19:
case 1662:
case 1724:
case 1395:
case 2127:
case 2196:
case 978:
case 2198:
case 1193:
case 3866:
case 67:
case 1459:
case 2636:
case 3618:
case 1756:
case 3843:
case 2528:
case 1175:
case 1308:
case 2597:
case 484:
case 3616:
case 1402:
case 3834:
case 1076:
case 1509:
case 2722:
case 2006:
case 2174:
case 1450:
case 1020:
case 3851:
case 242:
case 205:
case 2357:
case 194:
case 3263:
case 3246:
case 3232:
case 2092:
case 1777:
case 2212:
case 1104:
case 776:
case 1799:
case 1930:
case 1288:
case 2320:
case 1500:
case 2947:
case 1427:
case 1057:
case 1498:
case 398:
case 170:
case 1286:
case 1815:
case 2570:
case 2621:
case 2159:
case 1094:
case 2645:
case 2493:
case 1967:
case 48:
case 3511:
case 1172:
case 2531:
case 1214:
case 571:
case 674:
case 2901:
case 1405:
case 797:
case 2725:
case 2394:
case 662:
case 1620:
case 1166:
case 358:
case 265:
case 173:
case 3875:
case 489:
case 1900:
case 1065:
case 2737:
case 1134:
case 1740:
case 3202:
case 3717:
case 3183:
case 382:
case 732:
case 2760:
case 693:
case 3385:
case 848:
case 2931:
case 3274:
case 1345:
case 602:
case 645:
case 3112:
case 1567:
case 3911:
case 1571:
case 4017:
case 2466:
case 2673:
case 2695:
case 1923:
case 1044:
case 2443:
case 2362:
case 679:
case 3313:
case 2344:
case 1062:
case 15:
case 1033:
case 2434:
case 3205:
case 2042:
case 3296:
case 1151:
case 3227:
case 3018:
case 1364:
case 1952:
case 2979:
case 1539:
case 2038:
case 3016:
case 3382:
case 2997:
case 2608:
case 2135:
case 3250:
case 1463:
case 1336:
case 2064:
case 1678:
case 3115:
case 1260:
case 3199:
case 1849:
case 36:
case 310:
case 402:
case 903:
case 91:
case 3933:
case 960:
case 3354:
case 3962:
case 450:
case 3704:
case 493:
case 992:
case 3889:
case 3326:
case 3422:
case 3052:
case 618:
case 1918:
case 3578:
case 3009:
case 4075:
case 3576:
case 1916:
case 321:
case 815:
case 946:
case 2240:
case 1237:
case 689:
case 2982:
case 3529:
case 4004:
case 3557:
case 3000:
case 3630:
case 2860:
case 168:
case 3520:
case 914:
case 3331:
case 595:
case 3667:
case 3190:
case 1840:
case 3055:
case 4072:
case 701:
case 3817:
case 543:
case 1291:
case 3156:
case 631:
case 534:
case 3775:
case 832:
case 1011:
case 3158:
case 3880:
case 479:
case 2985:
case 704:
case 2794:
case 3847:
case 1126:
case 1197:
case 2431:
case 898:
case 3411:
case 288:
case 3081:
case 32:
case 1455:
case 2152:
case 1041:
case 634:
case 2109:
case 643:
case 386:
case 1399:
case 361:
case 130:
case 1007:
case 1550:
case 1154:
case 1377:
case 911:
case 2099:
case 2757:
case 1527:
case 3801:
case 2307:
case 1400:
case 2322:
case 324:
case 1963:
case 1390:
case 1946:
case 1932:
case 518:
case 987:
case 2058:
case 2428:
case 2287:
case 3230:
case 1708:
case 713:
case 3988:
case 1022:
case 2649:
case 128:
case 1409:
case 2778:
case 1358:
case 2934:
case 1669:
case 769:
case 2353:
case 1819:
case 1691:
case 2024:
case 2454:
case 1170:
case 1053:
case 3046:
case 2292:
case 3032:
case 3063:
case 225:
case 813:
case 2386:
case 3048:
case 3145:
case 2589:
case 3659:
case 80:
case 1088:
case 996:
case 1312:
case 1416:
case 1808:
case 3462:
case 2876:
case 3366:
case 1014:
case 942:
case 2878:
case 443:
case 1806:
case 1383:
case 869:
case 2314:
case 3035:
case 550:
case 2857:
case 2273:
case 1182:
case 2485:
case 1203:
case 3941:
case 3925:
case 2820:
case 376:
case 545:
case 1892:
case 3560:
case 1315:
case 3605:
case 798:
case 3138:
case 2116:
case 3465:
case 43:
case 3627:
case 3696:
case 1229:
case 3698:
case 3907:
case 1787:
case 1113:
case 3537:
case 2894:
case 3650:
case 3747:
case 397:
case 1710:
case 836:
case 1278:
case 278:
case 3375:
case 1244:
case 574:
case 671:
case 2865:
case 3393:
case 3541:
case 4026:
case 872:
case 3106:
case 2615:
case 3731:
case 590:
case 553:
case 3005:
case 4079:
case 3770:
case 332:
case 2242:
case 3027:
case 3096:
case 3216:
case 3885:
case 3098:
case 3507:
case 2264:
case 2917:
case 956:
case 3372:
case 2862:
case 2833:
case 3663:
case 4031:
case 3478:
case 466:
case 2989:
case 3648:
case 57:
case 3059:
case 1688:
case 1686:
case 3002:
case 3754:
case 455:
case 2221:
case 1864:
case 2245:
case 1614:
case 965:
case 3553:
case 1842:
case 1836:
case 440:
case 3991:
case 3192:
case 3403:
case 4070:
case 809:
case 1838:
case 1349:
case 1742:
case 116:
case 3588:
case 710:
case 76:
case 3200:
case 1738:
case 1548:
case 2972:
case 2171:
case 1764:
case 2049:
case 1622:
case 1101:
case 3782:
case 3389:
case 1902:
case 1563:
case 1546:
case 1532:
case 3255:
case 3897:
case 3826:
case 2391:
case 721:
case 2543:
case 3828:
case 1653:
case 2369:
case 1974:
case 2733:
case 3514:
case 214:
case 14:
case 3713:
case 639:
case 58:
case 764:
case 1721:
case 640:
case 2139:
case 246:
case 747:
case 422:
case 2551:
case 1471:
case 2360:
case 3870:
case 1625:
case 2993:
case 772:
case 655:
case 1905:
case 1535:
case 2447:
case 4013:
case 2661:
case 1430:
case 2337:
case 2677:
case 203:
case 2811:
case 1607:
case 3209:
case 348:
case 1998:
case 584:
case 167:
case 1037:
case 2699:
case 133:
case 144:
case 21:
case 260:
case 3380:
case 4084:
case 2927:
case 103:
case 1661:
case 3410:
case 3080:
case 2998:
case 2607:
case 233:
case 2037:
case 3297:
case 3226:
case 267:
case 1040:
case 192:
case 244:
case 3017:
case 586:
case 2721:
case 2060:
case 1139:
case 664:
case 561:
case 740:
case 1975:
case 2467:
case 2471:
case 1401:
case 3800:
case 755:
case 2905:
case 4018:
case 2147:
case 1744:
case 1391:
case 609:
case 822:
case 1566:
case 1369:
case 1624:
case 3583:
case 1762:
case 739:
case 389:
case 114:
case 3852:
case 1733:
case 968:
case 3809:
case 24:
case 1534:
case 2211:
case 1904:
case 3784:
case 2736:
case 3718:
case 610:
case 2439:
case 1656:
case 717:
case 1658:
case 3716:
case 1171:
case 1972:
case 2548:
case 2563:
case 2532:
case 983:
case 3723:
case 3374:
case 3634:
case 2614:
case 722:
case 954:
case 3120:
case 3473:
case 3818:
case 2842:
case 4000:
case 3643:
case 464:
case 3285:
case 3668:
case 1862:
case 379:
case 3752:
case 3359:
case 1833:
case 1989:
case 3302:
case 1612:
case 3949:
case 3194:
case 1844:
case 3558:
case 3072:
case 2265:
case 4055:
case 393:
case 1236:
case 1242:
case 881:
case 3350:
case 1238:
case 3327:
case 3396:
case 1264:
case 576:
case 302:
case 3940:
case 2845:
case 410:
case 3561:
case 4023:
case 3282:
case 95:
case 3398:
case 855:
case 9:
case 3755:
case 1615:
case 999:
case 3093:
case 597:
case 3075:
case 2262:
case 4052:
case 409:
case 3213:
case 3162:
case 3133:
case 2113:
case 413:
case 1184:
case 362:
case 1894:
case 1580:
case 40:
case 1208:
case 353:
case 1206:
case 390:
case 178:
case 2278:
case 3771:
case 3767:
case 532:
case 1295:
case 1857:
case 1485:
case 557:
case 2981:
case 834:
case 1015:
case 2203:
case 1820:
case 3445:
case 959:
case 3675:
case 3335:
case 895:
case 2315:
case 469:
case 3165:
case 1878:
case 4030:
case 404:
case 3068:
case 1292:
case 83:
case 125:
case 1482:
case 2185:
case 1012:
case 3958:
case 1386:
case 3442:
case 3363:
case 3436:
case 2418:
case 2088:
case 2895:
case 3332:
case 3346:
case 3739:
case 3672:
case 2312:
case 436:
case 2416:
case 4071:
case 1934:
case 1504:
case 498:
case 1703:
case 3201:
case 2423:
case 2170:
case 326:
case 1943:
case 1454:
case 1024:
case 1966:
case 1968:
case 1100:
case 980:
case 60:
case 2502:
case 1497:
case 1056:
case 1426:
case 1428:
case 3111:
case 2948:
case 3689:
case 2356:
case 1155:
case 2022:
case 1778:
case 73:
case 38:
case 2409:
case 613:
case 2358:
case 1720:
case 137:
case 2792:
case 163:
case 1061:
case 636:
case 2550:
case 230:
case 706:
case 3871:
case 2377:
case 1470:
case 2154:
case 2361:
case 1640:
case 2400:
case 2527:
case 100:
case 3617:
case 1341:
case 1325:
case 1794:
case 2935:
case 3830:
case 1431:
case 2126:
case 2197:
case 1575:
case 2128:
case 501:
case 743:
case 119:
case 2041:
case 384:
case 2455:
case 734:
case 1109:
case 3381:
case 2284:
case 3711:
case 2005:
case 2494:
case 1093:
case 654:
case 1651:
case 1129:
case 2731:
case 1075:
case 1305:
case 2541:
case 2106:
case 673:
case 3615:
case 2108:
case 1755:
case 765:
case 1176:
case 3917:
case 1577:
case 1282:
case 2507:
case 3264:
case 2420:
case 2173:
case 2195:
case 2937:
case 3980:
case 1700:
case 2098:
case 257:
case 1599:
case 193:
case 3242:
case 2218:
case 2096:
case 1350:
case 1556:
case 65:
case 1949:
case 1194:
case 1072:
case 3989:
case 1709:
case 483:
case 2478:
case 2648:
case 3612:
case 1590:
case 1406:
case 2779:
case 2646:
case 179:
case 2372:
case 2476:
case 1752:
case 2403:
case 1285:
case 1668:
case 1473:
case 1666:
case 1818:
case 2192:
case 1643:
case 1495:
case 958:
case 2882:
case 1723:
case 2754:
case 3245:
case 1374:
case 6:
case 2389:
case 3972:
case 2854:
case 3690:
case 3049:
case 1419:
case 2200:
case 1270:
case 1809:
case 3534:
case 972:
case 1784:
case 528:
case 3904:
case 3369:
case 1231:
case 189:
case 2514:
case 1852:
case 314:
case 3733:
case 2828:
case 947:
case 964:
case 723:
case 3130:
case 2826:
case 3391:
case 3401:
case 499:
case 865:
case 2870:
case 3975:
case 4:
case 1515:
case 3360:
case 668:
case 3993:
case 2119:
case 530:
case 346:
case 921:
case 2380:
case 31:
case 683:
case 1228:
case 1226:
case 3699:
case 3765:
case 3040:
case 856:
case 1410:
case 2317:
case 3811:
case 1080:
case 96:
case 910:
case 3337:
case 2831:
case 229:
case 3109:
case 842:
case 805:
case 544:
case 319:
case 608:
case 184:
case 3152:
case 567:
case 3575:
case 2081:
case 3593:
case 2847:
case 3341:
case 3325:
case 459:
case 4078:
case 3431:
case 300:
case 3307:
case 1617:
case 412:
case 2239:
case 3123:
case 1867:
case 3470:
case 3757:
case 261:
case 90:
case 3720:
case 680:
case 3077:
case 787:
case 3061:
case 286:
case 18:
case 4094:
case 2986:
case 54:
case 2230:
case 3090:
case 2988:
case 3155:
case 3776:
case 936:
case 3428:
case 3058:
case 1111:
case 3322:
case 3426:
case 3968:
case 3100:
case 720:
case 3454:
case 3943:
case 126:
case 3703:
case 4057:
case 1983:
case 2914:
case 904:
case 516:
case 3934:
case 470:
case 3353:
case 1839:
case 3803:
case 2602:
case 1436:
case 2121:
case 1363:
case 2922:
case 1990:
case 1739:
case 1346:
case 1332:
case 612:
case 1958:
case 2048:
case 3386:
case 1956:
case 2046:
case 2674:
case 998:
case 2953:
case 2444:
case 1043:
case 2368:
case 2591:
case 3083:
case 2462:
case 2366:
case 3876:
case 441:
case 2560:
case 2605:
case 635:
case 1693:
case 3820:
case 1445:
case 2941:
case 1051:
case 2136:
case 3118:
case 2142:
case 276:
case 2701:
case 591:
case 3015:
case 3295:
case 742:
case 3273:
case 3857:
case 153:
case 378:
case 190:
case 887:
case 2747:
case 162:
case 3580:
case 2650:
case 3208:
case 1144:
case 297:
case 2907:
case 1540:
case 3184:
case 1162:
case 1961:
case 2465:
case 1977:
case 2696:
case 174:
case 1133:
case 3710:
case 3278:
case 3276:
case 262:
case 2999:
case 197:
case 3787:
case 2977:
case 1465:
case 2961:
case 2162:
case 1696:
case 1138:
case 770:
case 2051:
case 735:
case 1925:
case 2675:
case 2335:
case 176:
case 3892:
case 642:
case 3182:
case 1701:
case 3203:
case 420:
case 2771:
case 1351:
case 4019:
case 1164:
case 794:
case 841:
case 759:
case 2068:
case 1334:
case 438:
case 2924:
case 4087:
case 1444:
case 27:
case 1368:
case 3484:
case 1591:
case 1343:
case 1462:
case 3808:
case 4010:
case 2034:
case 1433:
case 3086:
case 2348:
case 3719:
case 2438:
case 3416:
case 1659:
case 1922:
case 2442:
case 2363:
case 1121:
case 2739:
case 3895:
case 3185:
case 1048:
case 2958:
case 1046:
case 2464:
case 1063:
case 4092:
case 934:
case 405:
case 3691:
case 3053:
case 226:
case 3170:
case 727:
case 2983:
case 3574:
case 477:
case 2201:
case 1914:
case 3773:
case 859:
case 1271:
case 2839:
case 1267:
case 3795:
case 28:
case 328:
case 906:
case 1986:
case 1988:
case 611:
case 514:
case 3708:
case 1230:
case 349:
case 2247:
case 3452:
case 3022:
case 3948:
case 2912:
case 3963:
case 3502:
case 124:
case 3390:
case 3131:
case 3946:
case 3596:
case 1801:
case 3527:
case 3400:
case 2867:
case 3154:
case 3361:
case 3637:
case 307:
case 2871:
case 1239:
case 93:
case 3598:
case 330:
case 780:
case 2680:
case 186:
case 3792:
case 3399:
case 708:
case 3887:
case 894:
case 51:
case 3179:
case 592:
case 3025:
case 3041:
case 284:
case 835:
case 2915:
case 1411:
case 12:
case 4008:
case 503:
case 4006:
case 870:
case 3197:
case 3935:
case 2228:
case 783:
case 2297:
case 519:
case 3950:
case 2855:
case 2410:
case 148:
case 1209:
case 3607:
case 1831:
case 1785:
case 3905:
case 4036:
case 4042:
case 2515:
case 3467:
case 3641:
case 552:
case 1119:
case 1681:
case 563:
case 3745:
case 3721:
case 1187:
case 34:
case 3211:
case 2784:
case 2583:
case 3653:
case 2852:
case 1514:
case 623:
case 1828:
case 218:
case 940:
case 1255:
case 3147:
case 1826:
case 3069:
case 1389:
case 1782:
case 3101:
case 4021:
case 4045:
case 3532:
case 3548:
case 2823:
case 981:
case 3622:
case 2419:
case 1588:
case 3738:
case 2716:
case 2718:
case 2270:
case 2668:
case 3838:
case 2818:
case 3836:
case 115:
case 1074:
case 2120:
case 2473:
case 1192:
case 1991:
case 3614:
case 1882:
case 1304:
case 1754:
case 971:
case 3864:
case 2374:
case 2634:
case 3686:
case 1728:
case 1002:
case 75:
case 2949:
case 1059:
case 1429:
case 2072:
case 3265:
case 1726:
case 3688:
case 1478:
case 1522:
case 1813:
case 2302:
case 2884:
case 1372:
case 279:
case 1646:
case 2752:
case 1663:
case 2359:
case 1476:
case 2577:
case 2561:
case 2398:
case 1173:
case 3845:
case 1050:
case 2327:
case 1507:
case 245:
case 202:
case 1937:
case 2492:
case 1885:
case 1216:
case 883:
case 2599:
case 391:
case 293:
case 1096:
case 250:
case 2213:
case 754:
case 922:
case 423:
case 2075:
case 1541:
case 1106:
case 1635:
case 1375:
case 773:
case 1108:
case 868:
case 1960:
case 2176:
case 1393:
case 3555:
case 875:
case 678:
case 4058:
case 2781:
case 807:
case 3405:
case 3094:
case 1511:
case 565:
case 3967:
case 3498:
case 3815:
case 3286:
case 2910:
case 3665:
case 3496:
case 3427:
case 3057:
case 3104:
case 1248:
case 4024:
case 97:
case 3020:
case 1263:
case 394:
case 1232:
case 3939:
case 488:
case 1834:
case 3306:
case 3758:
case 3193:
case 3459:
case 3029:
case 3756:
case 3175:
case 1843:
case 2613:
case 437:
case 4077:
case 2848:
case 3812:
case 3523:
case 3662:
case 2832:
case 2846:
case 2863:
case 3003:
case 39:
case 849:
case 974:
case 3474:
case 1235:
case 2628:
case 2906:
case 3518:
case 2536:
case 2542:
case 984:
case 1978:
case 3516:
case 4015:
case 327:
case 2697:
case 2160:
case 3207:
case 3824:
case 2339:
case 2679:
case 2763:
case 1652:
case 1929:
case 2449:
case 1544:
case 1766:
case 3241:
case 3856:
case 113:
case 1469:
case 1743:
case 10:
case 1562:
case 2137:
case 3890:
case 2654:
case 478:
case 1623:
case 3584:
case 2973:
case 425:
case 3611:
case 2545:
case 600:
case 1751:
case 1460:
case 2631:
case 3877:
case 3861:
case 3253:
case 2367:
case 730:
case 663:
case 1071:
case 1067:
case 775:
case 1655:
case 926:
case 619:
case 2881:
case 3387:
case 2047:
case 3222:
case 234:
case 1030:
case 1565:
case 3310:
case 2330:
case 2670:
case 2191:
case 1347:
case 295:
case 688:
case 104:
case 1920:
case 2440:
case 3011:
case 1594:
case 2705:
case 692:
case 2355:
case 1793:
case 660:
case 61:
case 1156:
case 3291:
case 1775:
case 266:
case 2601:
case 538:
case 1331:
case 1667:
case 1425:
case 3840:
case 1055:
case 1441:
case 2921:
case 255:
case 1407:
case 368:
case 1520:
case 2647:
case 1370:
case 1630:
case 1965:
case 240:
case 1557:
case 2798:
case 147:
case 2499:
case 164:
case 2727:
case 918:
case 2458:
case 2028:
case 1529:
case 74:
case 2759:
case 2352:
case 2964:
case 1379:
case 2456:
case 2026:
case 3237:
case 239:
case 1639:
case 3916:
case 121:
case 2490:
case 2079:
case 1326:
case 109:
case 2506:
case 3918:
case 2942:
case 1422:
case 1052:
case 1578:
case 520:
case 1704:
case 2595:
case 3984:
case 2107:
case 1889:
case 1933:
case 2774:
case 1177:
case 931:
case 2323:
case 1962:
case 1503:
case 3260:
case 217:
case 1944:
case 1023:
case 2054:
case 2424:
case 3338:
case 2316:
case 446:
case 2082:
case 1115:
case 2412:
case 3448:
case 3446:
case 3432:
case 3676:
case 3342:
case 3463:
case 3539:
case 1486:
case 1298:
case 1016:
case 3909:
case 1382:
case 2874:
case 3364:
case 3151:
case 1018:
case 1488:
case 2013:
case 902:
case 1205:
case 1084:
case 35:
case 2293:
case 492:
case 3603:
case 2802:
case 950:
case 2859:
case 460:
case 3923:
case 2085:
case 1911:
case 3567:
case 3571:
case 3345:
case 1274:
case 979:
case 844:
case 2186:
case 791:
case 867:
case 3955:
case 2188:
case 542:
case 1202:
case 1717:
case 2272:
case 3065:
case 1259:
case 2587:
case 3657:
case 596:
case 3530:
case 3900:
case 2805:
case 1780:
case 3168:
case 3166:
case 1893:
case 158:
case 2510:
case 373:
case 1875:
case 3143:
case 1114:
case 2202:
case 4069:
case 2717:
case 2183:
case 1272:
case 3737:
case 1587:
case 171:
case 4091:
case 2893:
case 2875:
case 1510:
case 3692:
case 1085:
case 1415:
case 3148:
case 2112:
case 535:
case 1896:
case 3163:
case 1186:
case 1850:
case 3021:
case 81:
case 860:
case 3760:
case 1188:
case 691:
case 1013:
case 1483:
case 2084:
case 1275:
case 1293:
case 3434:
case 444:
case 4037:
case 467:
case 932:
case 2313:
case 3468:
case 3466:
case 1859:
case 957:
case 3954:
case 1316:
case 4060:
case 3606:
case 3608:
case 3997:
case 3926:
case 59:
case 2804:
case 814:
case 2486:
case 2382:
case 2016:
case 2298:
case 3042:
case 3036:
case 2018:
case 2227:
case 2488:
case 512:
case 2704:
case 2889:
case 1107:
case 527:
case 1774:
case 2354:
case 1323:
case 2177:
case 26:
case 2199:
case 901:
case 948:
case 3619:
case 1028:
case 1309:
case 2529:
case 3181:
case 3240:
case 1964:
case 1352:
case 64:
case 2639:
case 139:
case 1456:
case 1097:
case 1026:
case 1938:
case 2009:
case 2576:
case 1508:
case 1506:
case 209:
case 1079:
case 1490:
case 2578:
case 1141:
case 2052:
case 1942:
case 1936:
case 2407:
case 155:
case 1750:
case 3860:
case 1477:
case 2965:
case 2630:
case 2557:
case 3687:
case 1499:
case 1153:
case 1727:
case 1796:
case 2158:
case 633:
case 667:
case 3985:
case 2594:
case 792:
case 2331:
case 2671:
case 1921:
case 2441:
case 1122:
case 1945:
case 134:
case 1047:
case 143:
case 2030:
case 3290:
case 1440:
case 3825:
case 2347:
case 195:
case 607:
case 3807:
case 2301:
case 1545:
case 2751:
case 3224:
case 106:
case 1631:
case 1001:
case 752:
case 2067:
case 763:
case 236:
case 387:
case 878:
case 630:
case 2149:
case 3585:
case 2994:
case 311:
case 2544:
case 825:
case 2743:
case 2469:
case 451:
case 20:
case 2623:
case 1654:
case 3822:
case 1973:
case 3786:
case 1628:
case 3019:
case 2978:
case 1542:
case 3489:
case 1697:
case 1160:
case 2039:
case 2609:
case 1748:
case 485:
case 1732:
case 1679:
case 1746:
case 3853:
case 3261:
case 3582:
case 1449:
case 1763:
case 2652:
case 2929:
case 1848:
case 997:
case 3554:
case 1846:
case 1832:
case 3127:
case 1863:
case 3215:
case 5:
case 407:
case 599:
case 2235:
case 3579:
case 3006:
case 55:
case 3008:
case 3722:
case 2834:
case 4041:
case 3638:
case 3636:
case 3642:
case 2866:
case 2843:
case 298:
case 3570:
case 377:
case 3947:
case 3320:
case 2248:
case 3707:
case 2851:
case 305:
case 342:
case 3357:
case 3174:
case 2232:
case 3092:
case 778:
case 1268:
case 863:
case 651:
case 852:
case 396:
case 3394:
case 1266:
case 3741:
case 3283:
case 449:
case 3901:
case 1781:
case 573:
case 1234:
case 3621:
case 3159:
case 428:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1755824402/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,];
var gg_b = "1755824402/";

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
