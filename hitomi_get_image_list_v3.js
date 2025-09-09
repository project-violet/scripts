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
case 1831:
case 2377:
case 2805:
case 3813:
case 1125:
case 2907:
case 3870:
case 2843:
case 2338:
case 2776:
case 2872:
case 807:
case 1757:
case 2689:
case 2439:
case 2296:
case 3989:
case 1939:
case 1112:
case 1265:
case 4028:
case 134:
case 249:
case 3011:
case 3232:
case 3917:
case 3083:
case 1282:
case 3166:
case 57:
case 3815:
case 1123:
case 1782:
case 1886:
case 52:
case 23:
case 2947:
case 406:
case 3732:
case 3836:
case 1100:
case 423:
case 3822:
case 3726:
case 130:
case 2334:
case 1447:
case 2820:
case 158:
case 2567:
case 865:
case 199:
case 3062:
case 953:
case 2617:
case 473:
case 3652:
case 4039:
case 3860:
case 3949:
case 1452:
case 1191:
case 2022:
case 3130:
case 2919:
case 2132:
case 2266:
case 333:
case 933:
case 1180:
case 2126:
case 465:
case 2428:
case 3569:
case 1275:
case 2355:
case 698:
case 3045:
case 873:
case 1806:
case 1674:
case 3494:
case 657:
case 2015:
case 1295:
case 2811:
case 2952:
case 1694:
case 1058:
case 636:
case 246:
case 1487:
case 3687:
case 3437:
case 3196:
case 407:
case 3498:
case 1678:
case 3379:
case 1314:
case 3478:
case 3909:
case 2424:
case 154:
case 3176:
case 1710:
case 2609:
case 3072:
case 2013:
case 3801:
case 2538:
case 1742:
case 2885:
case 1846:
case 3005:
case 3208:
case 1253:
case 3915:
case 2557:
case 2342:
case 2373:
case 3052:
case 914:
case 2050:
case 851:
case 680:
case 2847:
case 596:
case 2945:
case 3708:
case 4046:
case 2622:
case 3620:
case 3645:
case 3922:
case 3019:
case 1074:
case 2636:
case 1445:
case 585:
case 745:
case 3744:
case 1658:
case 2214:
case 3156:
case 189:
case 2615:
case 3087:
case 2807:
case 684:
case 1127:
case 2218:
case 3990:
case 1037:
case 4006:
case 1729:
case 2184:
case 2302:
case 2395:
case 469:
case 3571:
case 3300:
case 1755:
case 724:
case 2670:
case 3672:
case 1839:
case 3643:
case 1443:
case 550:
case 538:
case 3605:
case 3692:
case 3323:
case 2613:
case 1366:
case 3204:
case 2431:
case 2601:
case 869:
case 195:
case 3284:
case 2446:
case 1485:
case 1635:
case 3435:
case 530:
case 220:
case 1234:
case 599:
case 3784:
case 3118:
case 3523:
case 318:
case 2575:
case 1330:
case 918:
case 3380:
case 17:
case 2382:
case 635:
case 1946:
case 12:
case 1064:
case 3500:
case 3371:
case 2887:
case 186:
case 321:
case 2321:
case 3611:
case 3433:
case 466:
case 451:
case 534:
case 371:
case 1828:
case 3788:
case 2573:
case 3114:
case 1277:
case 1376:
case 3047:
case 2256:
case 688:
case 3941:
case 1797:
case 3662:
case 1238:
case 2756:
case 2911:
case 1199:
case 3512:
case 3288:
case 2510:
case 2825:
case 3519:
case 2021:
case 1105:
case 1192:
case 1368:
case 669:
case 2859:
case 3669:
case 925:
case 1451:
case 2861:
case 1172:
case 3934:
case 484:
case 667:
case 2716:
case 99:
case 2484:
case 160:
case 3246:
case 3810:
case 2057:
case 39:
case 940:
case 2235:
case 3552:
case 1076:
case 3627:
case 2969:
case 1096:
case 1427:
case 3873:
case 4008:
case 835:
case 3842:
case 1760:
case 2823:
case 715:
case 4004:
case 1656:
case 3158:
case 2677:
case 480:
case 1103:
case 2509:
case 191:
case 2063:
case 1260:
case 692:
case 2488:
case 1120:
case 1741:
case 888:
case 241:
case 1030:
case 3895:
case 1988:
case 1598:
case 3080:
case 3706:
case 2800:
case 793:
case 1364:
case 3206:
case 2733:
case 3071:
case 3875:
case 3307:
case 2444:
case 3286:
case 1337:
case 3953:
case 1215:
case 2002:
case 1479:
case 76:
case 1832:
case 2106:
case 1826:
case 1722:
case 2999:
case 1183:
case 2589:
case 508:
case 1111:
case 1944:
case 1948:
case 2042:
case 1790:
case 3352:
case 884:
case 1713:
case 363:
case 1281:
case 2093:
case 1770:
case 963:
case 3955:
case 1213:
case 3012:
case 143:
case 3929:
case 2404:
case 2010:
case 2667:
case 741:
case 2629:
case 1618:
case 3967:
case 1374:
case 1904:
case 3418:
case 2146:
case 1185:
case 2349:
case 3135:
case 3025:
case 3099:
case 490:
case 2274:
case 2675:
case 437:
case 70:
case 2294:
case 1400:
case 1014:
case 3079:
case 181:
case 2602:
case 2695:
case 439:
case 1249:
case 2053:
case 61:
case 3995:
case 898:
case 3897:
case 1250:
case 3372:
case 3975:
case 716:
case 2313:
case 1666:
case 2381:
case 3466:
case 2390:
case 568:
case 3305:
case 1516:
case 2959:
case 1440:
case 3640:
case 836:
case 2642:
case 2961:
case 2322:
case 108:
case 3320:
case 912:
case 3511:
case 926:
case 3724:
case 3993:
case 2778:
case 2336:
case 1461:
case 2912:
case 3661:
case 98:
case 1018:
case 2029:
case 38:
case 2298:
case 2737:
case 2940:
case 1459:
case 461:
case 2798:
case 6:
case 2869:
case 376:
case 2541:
case 2621:
case 894:
case 3383:
case 2536:
case 3069:
case 1848:
case 1333:
case 532:
case 2764:
case 3051:
case 564:
case 20:
case 607:
case 3503:
case 3855:
case 2665:
case 2341:
case 1676:
case 283:
case 3965:
case 861:
case 717:
case 3476:
case 3867:
case 2124:
case 3178:
case 1696:
case 3520:
case 1187:
case 719:
case 591:
case 1289:
case 3921:
case 3137:
case 3239:
case 3198:
case 2360:
case 3496:
case 3385:
case 2077:
case 1717:
case 839:
case 2570:
case 3543:
case 1335:
case 1056:
case 3572:
case 1119:
case 2513:
case 1932:
case 3174:
case 890:
case 837:
case 2590:
case 1316:
case 1808:
case 3430:
case 1554:
case 2432:
case 377:
case 2879:
case 2268:
case 1480:
case 1630:
case 977:
case 327:
case 1844:
case 379:
case 104:
case 1152:
case 498:
case 459:
case 574:
case 931:
case 331:
case 2221:
case 2765:
case 2514:
case 234:
case 524:
case 2407:
case 3508:
case 1805:
case 1892:
case 1796:
case 2159:
case 1276:
case 2356:
case 1907:
case 750:
case 2125:
case 1338:
case 1776:
case 3489:
case 1872:
case 414:
case 1397:
case 3195:
case 3102:
case 69:
case 3384:
case 640:
case 2763:
case 818:
case 1334:
case 299:
case 258:
case 3175:
case 1567:
case 570:
case 3968:
case 3504:
case 2668:
case 1555:
case 410:
case 149:
case 2518:
case 2123:
case 785:
case 2033:
case 3780:
case 3006:
case 147:
case 545:
case 3271:
case 367:
case 1947:
case 1730:
case 1355:
case 1126:
case 1428:
case 1329:
case 2318:
case 2795:
case 3628:
case 3086:
case 3700:
case 15:
case 2295:
case 3833:
case 1649:
case 2775:
case 3449:
case 1811:
case 418:
case 1952:
case 3994:
case 1650:
case 2171:
case 1862:
case 578:
case 2452:
case 1534:
case 250:
case 3450:
case 1367:
case 238:
case 1132:
case 663:
case 2191:
case 1022:
case 648:
case 2180:
case 3304:
case 1266:
case 3240:
case 3712:
case 3816:
case 2710:
case 1353:
case 2273:
case 3165:
case 1577:
case 2556:
case 3978:
case 1070:
case 2924:
case 1538:
case 1597:
case 799:
case 758:
case 3937:
case 3212:
case 2742:
case 1090:
case 3031:
case 2773:
case 3588:
case 2487:
case 146:
case 2637:
case 2054:
case 351:
case 2698:
case 966:
case 3759:
case 366:
case 2678:
case 3157:
case 1424:
case 254:
case 3761:
case 2074:
case 1920:
case 3028:
case 3436:
case 3138:
case 702:
case 1636:
case 1714:
case 713:
case 1521:
case 2094:
case 1214:
case 3279:
case 2658:
case 786:
case 2403:
case 1049:
case 3:
case 1557:
case 1903:
case 2576:
case 3422:
case 2420:
case 1310:
case 2753:
case 1945:
case 2986:
case 603:
case 4085:
case 453:
case 3470:
case 2767:
case 2472:
case 2443:
case 3413:
case 2267:
case 3631:
case 323:
case 1681:
case 3490:
case 1613:
case 923:
case 906:
case 2530:
case 306:
case 1992:
case 1905:
case 2127:
case 2654:
case 2931:
case 833:
case 1184:
case 2729:
case 382:
case 55:
case 1302:
case 1943:
case 2078:
case 4011:
case 2755:
case 3332:
case 3167:
case 3878:
case 3751:
case 1382:
case 3916:
case 213:
case 1104:
case 787:
case 27:
case 3251:
case 547:
case 3837:
case 145:
case 53:
case 1985:
case 4045:
case 22:
case 627:
case 965:
case 1887:
case 3769:
case 286:
case 2485:
case 1148:
case 433:
case 3727:
case 2234:
case 120:
case 3646:
case 1089:
case 1363:
case 2566:
case 3039:
case 2179:
case 4092:
case 2277:
case 1357:
case 1542:
case 2906:
case 2797:
case 1256:
case 1660:
case 1017:
case 4043:
case 1593:
case 1852:
case 1911:
case 3460:
case 309:
case 2411:
case 2068:
case 3894:
case 1962:
case 1365:
case 1406:
case 3874:
case 1634:
case 1812:
case 2201:
case 3434:
case 1235:
case 2701:
case 1317:
case 1969:
case 1735:
case 1216:
case 653:
case 1840:
case 2096:
case 1825:
case 339:
case 3181:
case 939:
case 2469:
case 3190:
case 2368:
case 1859:
case 752:
case 2192:
case 2105:
case 1021:
case 4079:
case 337:
case 2451:
case 2594:
case 937:
case 34:
case 3170:
case 2143:
case 1549:
case 390:
case 141:
case 476:
case 356:
case 1082:
case 642:
case 1800:
case 1233:
case 361:
case 2988:
case 522:
case 232:
case 48:
case 1733:
case 50:
case 3711:
case 3956:
case 2241:
case 3866:
case 412:
case 2760:
case 1823:
case 3115:
case 403:
case 394:
case 1509:
case 2103:
case 3026:
case 291:
case 3438:
case 3688:
case 516:
case 1389:
case 3136:
case 3262:
case 3339:
case 2145:
case 2260:
case 1697:
case 3453:
case 760:
case 3914:
case 2826:
case 3608:
case 3141:
case 3720:
case 876:
case 2183:
case 3220:
case 2066:
case 2944:
case 2499:
case 936:
case 336:
case 2236:
case 1075:
case 1871:
case 2337:
case 2715:
case 252:
case 2398:
case 803:
case 2479:
case 2564:
case 2215:
case 1002:
case 1095:
case 3203:
case 1891:
case 3830:
case 3324:
case 2736:
case 2378:
case 2614:
case 398:
case 2618:
case 359:
case 1629:
case 479:
case 998:
case 959:
case 2568:
case 193:
case 3429:
case 427:
case 2394:
case 1448:
case 357:
case 2185:
case 957:
case 477:
case 3101:
case 429:
case 3648:
case 1042:
case 1073:
case 2790:
case 3896:
case 3792:
case 2270:
case 1350:
case 3272:
case 2781:
case 519:
case 791:
case 3467:
case 1010:
case 1404:
case 243:
case 2290:
case 633:
case 3205:
case 1053:
case 700:
case 3252:
case 1370:
case 2666:
case 119:
case 1313:
case 49:
case 2423:
case 2749:
case 384:
case 2354:
case 984:
case 1274:
case 3117:
case 425:
case 3044:
case 593:
case 1923:
case 1675:
case 3495:
case 355:
case 2014:
case 2400:
case 848:
case 2249:
case 1695:
case 1602:
case 1774:
case 3287:
case 1336:
case 1778:
case 3189:
case 2461:
case 444:
case 2018:
case 1298:
case 1912:
case 1237:
case 2533:
case 3386:
case 1851:
case 1315:
case 1798:
case 2459:
case 1940:
case 1278:
case 2425:
case 3442:
case 3473:
case 1642:
case 1925:
case 2209:
case 2107:
case 614:
case 208:
case 980:
case 380:
case 2884:
case 1693:
case 3004:
case 3410:
case 2676:
case 2804:
case 183:
case 1124:
case 388:
case 2789:
case 2187:
case 2696:
case 621:
case 1621:
case 541:
case 3707:
case 4000:
case 3586:
case 172:
case 3818:
case 1264:
case 3465:
case 2558:
case 1341:
case 3109:
case 1682:
case 4025:
case 2926:
case 618:
case 2491:
case 840:
case 2630:
case 2480:
case 4059:
case 3814:
case 3482:
case 89:
case 2844:
case 935:
case 335:
case 4061:
case 3150:
case 56:
case 1077:
case 3346:
case 4012:
case 3149:
case 2335:
case 2056:
case 2717:
case 1301:
case 1991:
case 3747:
case 3463:
case 2932:
case 1513:
case 1128:
case 1426:
case 2316:
case 2808:
case 3626:
case 1980:
case 1590:
case 3531:
case 3088:
case 3103:
case 294:
case 1158:
case 3656:
case 2115:
case 3760:
case 80:
case 872:
case 991:
case 2688:
case 932:
case 332:
case 261:
case 3598:
case 1802:
case 3988:
case 3030:
case 1938:
case 1587:
case 759:
case 2956:
case 4055:
case 2524:
case 1875:
case 144:
case 3364:
case 1669:
case 577:
case 3192:
case 3105:
case 736:
case 2528:
case 1519:
case 3469:
case 2170:
case 290:
case 1934:
case 3172:
case 1651:
case 527:
case 125:
case 1893:
case 140:
case 3201:
case 3076:
case 960:
case 360:
case 1746:
case 3427:
case 3096:
case 1154:
case 3701:
case 3713:
case 3270:
case 794:
case 2272:
case 2792:
case 2896:
case 3948:
case 368:
case 1857:
case 1929:
case 968:
case 4077:
case 943:
case 2205:
case 1012:
case 3770:
case 2743:
case 3281:
case 163:
case 2772:
case 2429:
case 1418:
case 3904:
case 1319:
case 3374:
case 1967:
case 298:
case 259:
case 3618:
case 1061:
case 2455:
case 2101:
case 1135:
case 257:
case 3185:
case 3394:
case 3162:
case 1286:
case 40:
case 2245:
case 352:
case 2644:
case 3236:
case 236:
case 739:
case 1507:
case 790:
case 1679:
case 1414:
case 1000:
case 3479:
case 74:
case 2745:
case 3722:
case 2608:
case 3826:
case 2720:
case 1863:
case 2453:
case 503:
case 3944:
case 2539:
case 483:
case 1023:
case 2220:
case 3209:
case 4063:
case 1640:
case 3107:
case 1164:
case 2442:
case 3884:
case 112:
case 1562:
case 103:
case 308:
case 1612:
case 3018:
case 701:
case 1583:
case 126:
case 2287:
case 2189:
case 3358:
case 441:
case 1224:
case 2787:
case 1659:
case 176:
case 1625:
case 4082:
case 2506:
case 1942:
case 3459:
case 2048:
case 4065:
case 2044:
case 2966:
case 815:
case 46:
case 1228:
case 2117:
case 1099:
case 0:
case 3249:
case 981:
case 2719:
case 1079:
case 3400:
case 3014:
case 1838:
case 2252:
case 678:
case 3250:
case 1897:
case 788:
case 1902:
case 1585:
case 2546:
case 3516:
case 3423:
case 2331:
case 1466:
case 563:
case 548:
case 3666:
case 2856:
case 1975:
case 1623:
case 1572:
case 3056:
case 3335:
case 1543:
case 2247:
case 1385:
case 4042:
case 3808:
case 4073:
case 1505:
case 2088:
case 2463:
case 780:
case 670:
case 3932:
case 3217:
case 3119:
case 3480:
case 2814:
case 575:
case 2632:
case 3926:
case 3554:
case 129:
case 1680:
case 3491:
case 304:
case 179:
case 904:
case 3844:
case 127:
case 525:
case 2421:
case 3333:
case 3848:
case 4095:
case 674:
case 1311:
case 784:
case 3558:
case 2109:
case 1957:
case 1178:
case 288:
case 1867:
case 900:
case 300:
case 2084:
case 1965:
case 3676:
case 1496:
case 1198:
case 1921:
case 1362:
case 1520:
case 269:
case 766:
case 3123:
case 2771:
case 3033:
case 1468:
case 518:
case 1232:
case 1917:
case 820:
case 1836:
case 1732:
case 267:
case 66:
case 3886:
case 1351:
case 3763:
case 1822:
case 2384:
case 397:
case 3100:
case 2968:
case 2504:
case 845:
case 153:
case 4009:
case 2175:
case 478:
case 2417:
case 999:
case 3356:
case 1881:
case 1813:
case 3257:
case 2964:
case 1085:
case 292:
case 3757:
case 2388:
case 3112:
case 3221:
case 2544:
case 2110:
case 962:
case 362:
case 2193:
case 521:
case 1989:
case 4049:
case 334:
case 934:
case 571:
case 3664:
case 3140:
case 205:
case 3265:
case 3514:
case 1437:
case 266:
case 3487:
case 3637:
case 2725:
case 251:
case 3698:
case 424:
case 3054:
case 354:
case 1478:
case 954:
case 3678:
case 2624:
case 1072:
case 2978:
case 2816:
case 2712:
case 2240:
case 2165:
case 3273:
case 2740:
case 2212:
case 2588:
case 3846:
case 3742:
case 1801:
case 950:
case 1949:
case 2450:
case 4089:
case 1860:
case 2723:
case 3180:
case 792:
case 2182:
case 133:
case 1020:
case 2974:
case 3928:
case 1130:
case 3191:
case 938:
case 3702:
case 3795:
case 1619:
case 693:
case 1045:
case 3275:
case 1569:
case 3419:
case 1474:
case 3058:
case 3694:
case 3775:
case 3202:
case 2200:
case 2833:
case 1494:
case 2348:
case 1748:
case 43:
case 3037:
case 3931:
case 1990:
case 3098:
case 1580:
case 3229:
case 1591:
case 1454:
case 3255:
case 709:
case 110:
case 2134:
case 449:
case 3078:
case 1970:
case 1248:
case 3443:
case 1889:
case 4060:
case 3839:
case 21:
case 2490:
case 1204:
case 3405:
case 3492:
case 2526:
case 2631:
case 1817:
case 1052:
case 3253:
case 1915:
case 1340:
case 1708:
case 3596:
case 1312:
case 1936:
case 3445:
case 987:
case 3074:
case 1019:
case 2028:
case 2197:
case 1361:
case 1922:
case 2686:
case 3403:
case 765:
case 2799:
case 1458:
case 989:
case 2177:
case 3658:
case 3094:
case 1603:
case 2894:
case 1683:
case 622:
case 1611:
case 542:
case 3411:
case 3483:
case 3633:
case 1849:
case 2606:
case 171:
case 2874:
case 2441:
case 1559:
case 782:
case 2153:
case 672:
case 207:
case 1941:
case 3797:
case 4081:
case 3906:
case 71:
case 1114:
case 3462:
case 1512:
case 723:
case 2460:
case 616:
case 1850:
case 4070:
case 3238:
case 849:
case 2646:
case 1435:
case 995:
case 3485:
case 1284:
case 3566:
case 553:
case 1523:
case 2227:
case 1784:
case 83:
case 1809:
case 2326:
case 3616:
case 4015:
case 902:
case 2916:
case 1380:
case 118:
case 4036:
case 986:
case 2935:
case 2769:
case 386:
case 2837:
case 1500:
case 32:
case 2898:
case 2895:
case 3233:
case 941:
case 156:
case 1032:
case 662:
case 800:
case 1211:
case 341:
case 1122:
case 634:
case 1711:
case 3733:
case 588:
case 3509:
case 194:
case 1115:
case 1866:
case 1477:
case 1762:
case 3186:
case 1262:
case 1136:
case 1688:
case 763:
case 1497:
case 630:
case 1684:
case 3550:
case 3951:
case 29:
case 697:
case 2810:
case 2246:
case 1285:
case 3840:
case 3216:
case 2842:
case 1785:
case 3735:
case 2627:
case 2154:
case 699:
case 3859:
case 1190:
case 1181:
case 501:
case 1113:
case 1528:
case 2519:
case 3549:
case 36:
case 1170:
case 137:
case 2116:
case 1429:
case 2865:
case 3655:
case 1455:
case 2319:
case 3629:
case 159:
case 1648:
case 2025:
case 744:
case 2821:
case 555:
case 157:
case 3448:
case 2059:
case 1243:
case 650:
case 915:
case 1896:
case 3042:
case 315:
case 1292:
case 2231:
case 1918:
case 2857:
case 3667:
case 1876:
case 1604:
case 248:
case 1772:
case 1467:
case 638:
case 881:
case 1141:
case 740:
case 3309:
case 3408:
case 79:
case 2133:
case 1539:
case 400:
case 580:
case 2699:
case 3871:
case 2286:
case 1644:
case 2679:
case 808:
case 3891:
case 3880:
case 3095:
case 2953:
case 725:
case 2000:
case 2414:
case 3139:
case 3237:
case 3912:
case 1386:
case 777:
case 3029:
case 687:
case 2511:
case 3055:
case 729:
case 2993:
case 1287:
case 2583:
case 689:
case 4030:
case 3278:
case 2659:
case 3869:
case 779:
case 3940:
case 3737:
case 1048:
case 727:
case 2942:
case 3315:
case 491:
case 3673:
case 3959:
case 2164:
case 3827:
case 1410:
case 3560:
case 3693:
case 212:
case 3322:
case 1493:
case 2612:
case 2320:
case 3067:
case 3610:
case 2343:
case 1252:
case 2838:
case 2372:
case 2585:
case 2902:
case 3053:
case 3900:
case 917:
case 3390:
case 2466:
case 2392:
case 4076:
case 3313:
case 2623:
case 319:
case 3381:
case 919:
case 3923:
case 3675:
case 1966:
case 1117:
case 3274:
case 559:
case 598:
case 184:
case 1475:
case 2728:
case 1719:
case 3774:
case 155:
case 557:
case 3294:
case 843:
case 78:
case 3268:
case 3879:
case 1482:
case 860:
case 613:
case 2963:
case 539:
case 2430:
case 101:
case 3432:
case 3899:
case 279:
case 686:
case 590:
case 135:
case 537:
case 62:
case 227:
case 3570:
case 3301:
case 1247:
case 2543:
case 1149:
case 2385:
case 3971:
case 3590:
case 1531:
case 3980:
case 1626:
case 2592:
case 2982:
case 3097:
case 3128:
case 3038:
case 1930:
case 1747:
case 594:
case 2178:
case 2476:
case 383:
case 2739:
case 4066:
case 983:
case 2137:
case 864:
case 2362:
case 3360:
case 916:
case 2520:
case 2545:
case 3764:
case 1421:
case 2311:
case 1707:
case 3621:
case 3536:
case 556:
case 891:
case 3665:
case 452:
case 90:
case 972:
case 3515:
case 2957:
case 372:
case 2829:
case 3334:
case 2822:
case 802:
case 87:
case 1102:
case 253:
case 1504:
case 2327:
case 3617:
case 3567:
case 2166:
case 2815:
case 895:
case 169:
case 3529:
case 1280:
case 2011:
case 1291:
case 3230:
case 2369:
case 949:
case 3555:
case 1791:
case 3041:
case 2836:
case 565:
case 2732:
case 1548:
case 3845:
case 1271:
case 2351:
case 93:
case 347:
case 1006:
case 33:
case 947:
case 632:
case 242:
case 4094:
case 1544:
case 2989:
case 1193:
case 2599:
case 509:
case 4074:
case 507:
case 105:
case 2579:
case 664:
case 2464:
case 487:
case 3001:
case 3276:
case 3553:
case 3377:
case 2085:
case 3796:
case 3689:
case 192:
case 3439:
case 1388:
case 3296:
case 2870:
case 3397:
case 3776:
case 3070:
case 1978:
case 1165:
case 3577:
case 3353:
case 1712:
case 3885:
case 1588:
case 3090:
case 2092:
case 1121:
case 1937:
case 1212:
case 2801:
case 3013:
case 3987:
case 1835:
case 3081:
case 2687:
case 2437:
case 151:
case 1725:
case 946:
case 1261:
case 346:
case 5:
case 3424:
case 1624:
case 1259:
case 1700:
case 4064:
case 2474:
case 3126:
case 3355:
case 506:
case 1163:
case 3952:
case 2003:
case 1200:
case 2551:
case 3649:
case 402:
case 47:
case 582:
case 413:
case 35:
case 1450:
case 573:
case 3862:
case 2652:
case 51:
case 3650:
case 1584:
case 523:
case 3266:
case 1304:
case 668:
case 2527:
case 2130:
case 3919:
case 2020:
case 1974:
case 3132:
case 3367:
case 2889:
case 978:
case 3009:
case 458:
case 1470:
case 11:
case 2704:
case 173:
case 3431:
case 1490:
case 1631:
case 3690:
case 328:
case 1954:
case 928:
case 2692:
case 1526:
case 2580:
case 1864:
case 3218:
case 3582:
case 3905:
case 3992:
case 2748:
case 2913:
case 2981:
case 2970:
case 838:
case 3943:
case 1134:
case 3395:
case 3184:
case 182:
case 4033:
case 2300:
case 3521:
case 3188:
case 3636:
case 3486:
case 2922:
case 2019:
case 1028:
case 1299:
case 2458:
case 3049:
case 462:
case 2325:
case 1799:
case 3615:
case 2744:
case 2603:
case 1279:
case 1868:
case 3214:
case 214:
case 2052:
case 3050:
case 2817:
case 2340:
case 4016:
case 3557:
case 3622:
case 2620:
case 3310:
case 911:
case 4035:
case 608:
case 2047:
case 600:
case 3542:
case 3357:
case 2114:
case 2788:
case 2512:
case 2288:
case 592:
case 2662:
case 3983:
case 3660:
case 3017:
case 2611:
case 3962:
case 531:
case 109:
case 221:
case 454:
case 4054:
case 710:
case 924:
case 2525:
case 271:
case 3819:
case 3108:
case 3641:
case 3365:
case 897:
case 569:
case 3104:
case 1751:
case 1167:
case 218:
case 1332:
case 830:
case 2391:
case 4058:
case 899:
case 567:
case 858:
case 2901:
case 604:
case 945:
case 3985:
case 345:
case 1251:
case 2500:
case 2685:
case 714:
case 1401:
case 3148:
case 2118:
case 1227:
case 2523:
case 3363:
case 3089:
case 450:
case 970:
case 2809:
case 370:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1757426401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,];
var gg_b = "1757426401/";

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
