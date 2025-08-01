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
case 3262:
case 2354:
case 305:
case 3593:
case 2572:
case 2415:
case 1967:
case 146:
case 933:
case 579:
case 2807:
case 783:
case 2698:
case 3300:
case 2467:
case 1915:
case 1274:
case 2825:
case 2195:
case 4042:
case 923:
case 1987:
case 1680:
case 3933:
case 3041:
case 972:
case 95:
case 1552:
case 3955:
case 2017:
case 867:
case 2086:
case 1798:
case 1823:
case 1492:
case 863:
case 1811:
case 329:
case 2416:
case 1083:
case 450:
case 1421:
case 3037:
case 3476:
case 3973:
case 384:
case 1413:
case 2066:
case 1112:
case 2164:
case 1234:
case 2196:
case 339:
case 1909:
case 2094:
case 1890:
case 3956:
case 2702:
case 3642:
case 937:
case 1193:
case 288:
case 3299:
case 3855:
case 3130:
case 831:
case 1614:
case 546:
case 179:
case 759:
case 858:
case 2797:
case 3324:
case 1887:
case 3046:
case 286:
case 190:
case 3399:
case 626:
case 3504:
case 2925:
case 821:
case 638:
case 3734:
case 651:
case 856:
case 1867:
case 793:
case 2907:
case 269:
case 2490:
case 2191:
case 3856:
case 1469:
case 2003:
case 1762:
case 3059:
case 961:
case 3045:
case 1104:
case 1808:
case 3774:
case 664:
case 1990:
case 1809:
case 2342:
case 1488:
case 1816:
case 2411:
case 1489:
case 2926:
case 1782:
case 2892:
case 3873:
case 2423:
case 1018:
case 3447:
case 745:
case 1530:
case 2813:
case 41:
case 1923:
case 2242:
case 1911:
case 3170:
case 2988:
case 3471:
case 3129:
case 1387:
case 251:
case 3128:
case 710:
case 842:
case 3349:
case 4069:
case 530:
case 3824:
case 2474:
case 1974:
case 3355:
case 1631:
case 686:
case 1215:
case 3790:
case 1517:
case 357:
case 226:
case 2052:
case 3186:
case 3233:
case 602:
case 1367:
case 1072:
case 800:
case 2954:
case 2771:
case 3982:
case 3711:
case 57:
case 1315:
case 3194:
case 3255:
case 688:
case 3096:
case 1454:
case 4026:
case 3064:
case 2747:
case 3607:
case 3900:
case 3557:
case 754:
case 3723:
case 3899:
case 228:
case 1308:
case 399:
case 1157:
case 1594:
case 2213:
case 997:
case 1032:
case 33:
case 3273:
case 3185:
case 2292:
case 2563:
case 3356:
case 2501:
case 2651:
case 3669:
case 215:
case 3626:
case 117:
case 3117:
case 1586:
case 1671:
case 1934:
case 370:
case 2440:
case 3373:
case 3165:
case 32:
case 669:
case 1647:
case 1529:
case 2434:
case 3688:
case 2177:
case 3095:
case 3256:
case 698:
case 4092:
case 3998:
case 2145:
case 130:
case 3999:
case 3800:
case 2158:
case 513:
case 1773:
case 366:
case 983:
case 3716:
case 2854:
case 3539:
case 2070:
case 2648:
case 3402:
case 3538:
case 696:
case 2633:
case 120:
case 2527:
case 1179:
case 3543:
case 152:
case 17:
case 723:
case 368:
case 3480:
case 3181:
case 2505:
case 3010:
case 3862:
case 2735:
case 3924:
case 406:
case 334:
case 3767:
case 3613:
case 727:
case 2146:
case 2775:
case 2518:
case 419:
case 3621:
case 1676:
case 1581:
case 2268:
case 1290:
case 3715:
case 1834:
case 1143:
case 2030:
case 1139:
case 1138:
case 408:
case 1503:
case 987:
case 324:
case 2226:
case 1749:
case 1442:
case 441:
case 1748:
case 1635:
case 2288:
case 2369:
case 3351:
case 1755:
case 1211:
case 2736:
case 26:
case 2853:
case 782:
case 1774:
case 3697:
case 3808:
case 1951:
case 3990:
case 1856:
case 708:
case 2835:
case 3762:
case 2451:
case 529:
case 1059:
case 18:
case 1058:
case 741:
case 816:
case 2947:
case 922:
case 59:
case 3911:
case 1471:
case 3488:
case 706:
case 2754:
case 427:
case 194:
case 719:
case 950:
case 1873:
case 965:
case 649:
case 1447:
case 539:
case 818:
case 973:
case 1849:
case 660:
case 2931:
case 1324:
case 2674:
case 1848:
case 3887:
case 977:
case 1144:
case 2510:
case 1833:
case 1299:
case 2038:
case 2380:
case 2260:
case 1298:
case 3570:
case 1855:
case 2043:
case 45:
case 3614:
case 379:
case 825:
case 2875:
case 2591:
case 1740:
case 3867:
case 2360:
case 390:
case 835:
case 3815:
case 2522:
case 1734:
case 3120:
case 2297:
case 1476:
case 1037:
case 4060:
case 3413:
case 1152:
case 2473:
case 3492:
case 3823:
case 2976:
case 3811:
case 129:
case 203:
case 3063:
case 1956:
case 3724:
case 2935:
case 2172:
case 4080:
case 1453:
case 3112:
case 2953:
case 1851:
case 3908:
case 594:
case 3890:
case 139:
case 1300:
case 2057:
case 2564:
case 1475:
case 3274:
case 2975:
case 105:
case 2214:
case 3967:
case 346:
case 1200:
case 2433:
case 1041:
case 2448:
case 3552:
case 2742:
case 2936:
case 3602:
case 301:
case 2455:
case 3987:
case 1520:
case 1578:
case 3290:
case 3311:
case 1251:
case 3834:
case 2616:
case 1579:
case 2347:
case 276:
case 1692:
case 1767:
case 3840:
case 1613:
case 2371:
case 1621:
case 445:
case 1351:
case 2545:
case 603:
case 80:
case 3223:
case 3503:
case 497:
case 2558:
case 2559:
case 4036:
case 3748:
case 2271:
case 3773:
case 2499:
case 1161:
case 4076:
case 2231:
case 3050:
case 2615:
case 493:
case 1091:
case 1882:
case 557:
case 895:
case 2721:
case 2106:
case 1998:
case 2960:
case 2004:
case 330:
case 607:
case 2118:
case 352:
case 2119:
case 1480:
case 3636:
case 3756:
case 1010:
case 1924:
case 2424:
case 1708:
case 1402:
case 1538:
case 4035:
case 320:
case 2980:
case 2687:
case 13:
case 1273:
case 1185:
case 908:
case 487:
case 2690:
case 2997:
case 2335:
case 1669:
case 3308:
case 1497:
case 3566:
case 4031:
case 2353:
case 2537:
case 2623:
case 919:
case 750:
case 765:
case 1165:
case 906:
case 2235:
case 1688:
case 3529:
case 1095:
case 1689:
case 2611:
case 3209:
case 3586:
case 3934:
case 317:
case 1117:
case 3208:
case 722:
case 2253:
case 170:
case 3974:
case 2462:
case 1355:
case 3631:
case 3751:
case 313:
case 2336:
case 2768:
case 1790:
case 3215:
case 1414:
case 2880:
case 1084:
case 157:
case 1333:
case 2914:
case 2275:
case 3565:
case 1194:
case 885:
case 1711:
case 2789:
case 2236:
case 3454:
case 1064:
case 1898:
case 2012:
case 1557:
case 3367:
case 2400:
case 255:
case 2375:
case 1248:
case 1625:
case 1249:
case 483:
case 2917:
case 3296:
case 241:
case 2610:
case 3941:
case 3384:
case 87:
case 673:
case 1465:
case 3264:
case 1087:
case 1272:
case 2965:
case 1805:
case 3977:
case 1417:
case 347:
case 282:
case 500:
case 1015:
case 2691:
case 3396:
case 2252:
case 206:
case 1485:
case 911:
case 632:
case 2622:
case 1372:
case 614:
case 3457:
case 4030:
case 1901:
case 4070:
case 3295:
case 1710:
case 1963:
case 2803:
case 3154:
case 2463:
case 2100:
case 1806:
case 1819:
case 3073:
case 2928:
case 2929:
case 1818:
case 3630:
case 3937:
case 1791:
case 2013:
case 2986:
case 2534:
case 1428:
case 2704:
case 2885:
case 703:
case 976:
case 3210:
case 1795:
case 6:
case 874:
case 3322:
case 100:
case 3732:
case 3946:
case 3502:
case 2684:
case 3438:
case 978:
case 61:
case 3291:
case 3310:
case 292:
case 2695:
case 2089:
case 1796:
case 2418:
case 1764:
case 1180:
case 1023:
case 2419:
case 1481:
case 1919:
case 436:
case 2829:
case 1883:
case 2124:
case 2026:
case 3837:
case 1102:
case 3051:
case 2069:
case 1403:
case 2894:
case 2866:
case 3945:
case 1542:
case 451:
case 1160:
case 1461:
case 1906:
case 2198:
case 2961:
case 2406:
case 707:
case 426:
case 1801:
case 2244:
case 4052:
case 1863:
case 2720:
case 2903:
case 2779:
case 3964:
case 3241:
case 2778:
case 2515:
case 3000:
case 156:
case 3996:
case 2217:
case 1135:
case 2054:
case 335:
case 3082:
case 3277:
case 2567:
case 692:
case 903:
case 2265:
case 1972:
case 1745:
case 2:
case 3341:
case 3536:
case 4061:
case 3113:
case 2646:
case 3706:
case 3121:
case 2870:
case 469:
case 158:
case 1176:
case 778:
case 879:
case 325:
case 3062:
case 1759:
case 1758:
case 3192:
case 1638:
case 2285:
case 2173:
case 2148:
case 1383:
case 3995:
case 3337:
case 1592:
case 1201:
case 2844:
case 486:
case 2133:
case 2328:
case 1040:
case 2329:
case 1679:
case 2516:
case 1521:
case 318:
case 2294:
case 1136:
case 1513:
case 3237:
case 1283:
case 1932:
case 1746:
case 2229:
case 2645:
case 1301:
case 2658:
case 2509:
case 575:
case 2366:
case 2738:
case 2286:
case 316:
case 2432:
case 2508:
case 3603:
case 2743:
case 402:
case 3553:
case 309:
case 3727:
case 3910:
case 3763:
case 3126:
case 167:
case 1470:
case 3617:
case 4066:
case 3531:
case 3346:
case 556:
case 214:
case 2641:
case 749:
case 3884:
case 848:
case 619:
case 2852:
case 1147:
case 801:
case 2970:
case 3188:
case 3189:
case 606:
case 2677:
case 1327:
case 1950:
case 222:
case 3991:
case 1205:
case 4086:
case 1872:
case 558:
case 3098:
case 4028:
case 3685:
case 711:
case 1227:
case 3168:
case 273:
case 3169:
case 3896:
case 2151:
case 608:
case 265:
case 3345:
case 4065:
case 1741:
case 3125:
case 277:
case 2042:
case 4017:
case 371:
case 3694:
case 1777:
case 2303:
case 1832:
case 2361:
case 1218:
case 498:
case 3359:
case 2281:
case 3666:
case 3629:
case 1206:
case 1589:
case 1444:
case 3245:
case 2523:
case 2637:
case 755:
case 1430:
case 175:
case 1526:
case 496:
case 3259:
case 2261:
case 672:
case 1478:
case 104:
case 853:
case 1772:
case 4012:
case 2071:
case 796:
case 3102:
case 1837:
case 3011:
case 50:
case 283:
case 3764:
case 2979:
case 2978:
case 3481:
case 455:
case 3180:
case 3023:
case 1959:
case 1051:
case 4020:
case 3784:
case 633:
case 1945:
case 2458:
case 3461:
case 3906:
case 2632:
case 2752:
case 2857:
case 1142:
case 1560:
case 411:
case 2672:
case 3693:
case 2304:
case 300:
case 3612:
case 185:
case 3795:
case 287:
case 449:
case 2943:
case 342:
case 3927:
case 2204:
case 1841:
case 2446:
case 1222:
case 1732:
case 1439:
case 1652:
case 1502:
case 1438:
case 1310:
case 1291:
case 381:
case 96:
case 1443:
case 2031:
case 504:
case 2770:
case 1845:
case 702:
case 654:
case 1859:
case 1858:
case 3901:
case 3466:
case 1295:
case 3710:
case 3494:
case 3963:
case 788:
case 740:
case 610:
case 293:
case 2879:
case 3722:
case 3818:
case 3232:
case 786:
case 143:
case 1630:
case 928:
case 3791:
case 2562:
case 1846:
case 2293:
case 1033:
case 1514:
case 1977:
case 1049:
case 3417:
case 1670:
case 147:
case 1055:
case 2843:
case 2477:
case 3827:
case 2036:
case 1941:
case 2212:
case 1384:
case 2838:
case 915:
case 2839:
case 3465:
case 868:
case 2582:
case 3067:
case 2393:
case 1457:
case 964:
case 3015:
case 2500:
case 245:
case 2650:
case 2730:
case 3485:
case 1694:
case 988:
case 407:
case 738:
case 839:
case 1107:
case 1359:
case 3832:
case 1358:
case 3741:
case 89:
case 693:
case 210:
case 902:
case 3569:
case 2717:
case 3430:
case 363:
case 728:
case 254:
case 516:
case 3526:
case 3588:
case 884:
case 1628:
case 3589:
case 659:
case 2683:
case 535:
case 969:
case 645:
case 1884:
case 715:
case 3147:
case 2343:
case 1188:
case 261:
case 1910:
case 1763:
case 1126:
case 3470:
case 1701:
case 3305:
case 1864:
case 1099:
case 697:
case 2812:
case 2238:
case 1168:
case 2491:
case 805:
case 2243:
case 3950:
case 3507:
case 3737:
case 1991:
case 764:
case 403:
case 2728:
case 1404:
case 562:
case 3872:
case 2729:
case 571:
case 3521:
case 1681:
case 2619:
case 2495:
case 3034:
case 3383:
case 996:
case 2573:
case 1337:
case 1995:
case 3263:
case 3678:
case 3201:
case 1661:
case 116:
case 109:
case 1727:
case 3283:
case 272:
case 4038:
case 3932:
case 2606:
case 3746:
case 1535:
case 2167:
case 2556:
case 1705:
case 135:
case 3135:
case 321:
case 4079:
case 444:
case 2993:
case 2464:
case 3972:
case 4078:
case 1575:
case 1493:
case 1000:
case 2804:
case 3153:
case 687:
case 2109:
case 1996:
case 2108:
case 227:
case 356:
case 2014:
case 1377:
case 3643:
case 2703:
case 125:
case 1062:
case 2920:
case 2761:
case 3759:
case 2548:
case 1192:
case 1984:
case 1536:
case 2605:
case 1706:
case 2555:
case 237:
case 3074:
case 2257:
case 3176:
case 383:
case 1330:
case 1088:
case 966:
case 2011:
case 1089:
case 2481:
case 1712:
case 474:
case 3979:
case 3047:
case 1886:
case 1829:
case 1981:
case 2919:
case 1828:
case 2102:
case 1026:
case 3071:
case 815:
case 3632:
case 2461:
case 3752:
case 2784:
case 1866:
case 1199:
case 1244:
case 1406:
case 1961:
case 1903:
case 413:
case 2863:
case 631:
case 729:
case 417:
case 2795:
case 2350:
case 1696:
case 1025:
case 784:
case 3599:
case 2693:
case 658:
case 989:
case 826:
case 1684:
case 3524:
case 838:
case 1427:
case 2927:
case 924:
case 1817:
case 851:
case 3446:
case 656:
case 3204:
case 663:
case 675:
case 2332:
case 957:
case 1182:
case 2494:
case 1463:
case 452:
case 1401:
case 1100:
case 359:
case 1929:
case 1928:
case 1092:
case 2114:
case 1162:
case 393:
case 4050:
case 3437:
case 3076:
case 1704:
case 3878:
case 1534:
case 1013:
case 1986:
case 3477:
case 3036:
case 3843:
case 3839:
case 2465:
case 108:
case 2805:
case 999:
case 1965:
case 2272:
case 2087:
case 182:
case 2417:
case 3320:
case 345:
case 3730:
case 1691:
case 3312:
case 2485:
case 1252:
case 3393:
case 3744:
case 3582:
case 667:
case 2604:
case 2067:
case 1985:
case 970:
case 2197:
case 448:
case 2306:
case 3551:
case 3601:
case 2741:
case 310:
case 3278:
case 3663:
case 1303:
case 2777:
case 1281:
case 2218:
case 3765:
case 2444:
case 2589:
case 3379:
case 1930:
case 1637:
case 1523:
case 1757:
case 354:
case 275:
case 1203:
case 263:
case 2430:
case 480:
case 2318:
case 1261:
case 1944:
case 2319:
case 1381:
case 2526:
case 3785:
case 2470:
case 132:
case 3002:
case 1641:
case 799:
case 898:
case 4001:
case 1852:
case 2147:
case 3339:
case 3080:
case 51:
case 3410:
case 1677:
case 3794:
case 73:
case 770:
case 122:
case 2950:
case 2507:
case 3729:
case 691:
case 2205:
case 3728:
case 896:
case 3239:
case 2525:
case 72:
case 3243:
case 1151:
case 2227:
case 3190:
case 2592:
case 1149:
case 2263:
case 2383:
case 1148:
case 490:
case 3187:
case 1329:
case 2679:
case 1328:
case 2678:
case 1133:
case 2201:
case 3619:
case 1266:
case 905:
case 3618:
case 333:
case 2513:
case 766:
case 2136:
case 1294:
case 35:
case 4027:
case 2175:
case 2363:
case 2301:
case 3167:
case 1228:
case 1645:
case 1229:
case 2932:
case 1659:
case 1432:
case 1738:
case 1394:
case 869:
case 4018:
case 4019:
case 1779:
case 840:
case 514:
case 256:
case 984:
case 3109:
case 1567:
case 3496:
case 1054:
case 2850:
case 2135:
case 3464:
case 11:
case 3993:
case 929:
case 886:
case 3555:
case 1646:
case 1952:
case 2745:
case 724:
case 1317:
case 2074:
case 337:
case 3703:
case 2643:
case 3920:
case 3533:
case 565:
case 789:
case 939:
case 573:
case 3548:
case 2759:
case 2452:
case 2033:
case 1293:
case 2670:
case 1320:
case 2049:
case 2977:
case 1036:
case 341:
case 197:
case 3917:
case 2055:
case 2296:
case 1843:
case 3574:
case 1838:
case 2384:
case 3985:
case 1582:
case 1220:
case 1075:
case 2396:
case 1650:
case 145:
case 319:
case 1500:
case 3691:
case 412:
case 1312:
case 306:
case 2364:
case 3463:
case 3994:
case 4010:
case 468:
case 3100:
case 159:
case 3401:
case 2845:
case 779:
case 583:
case 2858:
case 878:
case 913:
case 2597:
case 2154:
case 2295:
case 3182:
case 193:
case 3483:
case 3534:
case 3013:
case 671:
case 876:
case 3881:
case 3928:
case 790:
case 2937:
case 2630:
case 3162:
case 3270:
case 1599:
case 2142:
case 1857:
case 1304:
case 860:
case 470:
case 625:
case 3885:
case 2580:
case 3370:
case 1943:
case 3817:
case 1939:
case 1204:
case 2841:
case 3405:
case 43:
case 2438:
case 3684:
case 2502:
case 2439:
case 2946:
case 2732:
case 1524:
case 1031:
case 392:
case 499:
case 2443:
case 2877:
case 2310:
case 3427:
case 2479:
case 2772:
case 3828:
case 204:
case 2478:
case 4064:
case 559:
case 3330:
case 746:
case 3088:
case 811:
case 3695:
case 3089:
case 3712:
case 609:
case 1979:
case 1445:
case 2958:
case 3244:
case 593:
case 457:
case 3406:
case 4084:
case 3961:
case 2959:
case 920:
case 3068:
case 849:
case 2051:
case 618:
case 3230:
case 1632:
case 3866:
case 3199:
case 2277:
case 2891:
case 3054:
case 31:
case 3385:
case 2719:
case 1804:
case 1912:
case 2241:
case 2000:
case 3778:
case 3779:
case 494:
case 3217:
case 1357:
case 1109:
case 1116:
case 225:
case 3587:
case 1703:
case 1627:
case 3173:
case 3285:
case 3365:
case 1548:
case 1761:
case 4058:
case 3952:
case 1555:
case 3646:
case 48:
case 2341:
case 2536:
case 2984:
case 137:
case 1619:
case 2576:
case 2681:
case 946:
case 133:
case 3830:
case 1495:
case 2995:
case 1573:
case 844:
case 3516:
case 3328:
case 3133:
case 216:
case 554:
case 3286:
case 3508:
case 3659:
case 2661:
case 901:
case 3658:
case 3509:
case 3738:
case 3366:
case 948:
case 3394:
case 2727:
case 209:
case 752:
case 77:
case 2603:
case 123:
case 172:
case 15:
case 2237:
case 1556:
case 1167:
case 1606:
case 2665:
case 3852:
case 49:
case 1080:
case 1111:
case 161:
case 1410:
case 1794:
case 3970:
case 1343:
case 332:
case 439:
case 1820:
case 1002:
case 2763:
case 807:
case 695:
case 314:
case 3641:
case 2531:
case 2346:
case 1238:
case 1812:
case 484:
case 2864:
case 1060:
case 2922:
case 2169:
case 1243:
case 3151:
case 373:
case 3450:
case 350:
case 2168:
case 2991:
case 429:
case 1729:
case 2246:
case 2404:
case 647:
case 3303:
case 533:
case 3281:
case 2358:
case 84:
case 643:
case 1765:
case 713:
case 2107:
case 4041:
case 1551:
case 3590:
case 2345:
case 1278:
case 2125:
case 1717:
case 990:
case 154:
case 2895:
case 60:
case 3203:
case 2259:
case 2686:
case 1785:
case 3944:
case 2258:
case 523:
case 1378:
case 2245:
case 2628:
case 1379:
case 2629:
case 1683:
case 405:
case 458:
case 3835:
case 2762:
case 1003:
case 3451:
case 1191:
case 1490:
case 169:
case 1061:
case 2006:
case 747:
case 617:
case 2809:
case 1968:
case 2990:
case 2697:
case 431:
case 1969:
case 1110:
case 2544:
case 1926:
case 2489:
case 1411:
case 3971:
case 3634:
case 2488:
case 3754:
case 2018:
case 2019:
case 2923:
case 344:
case 795:
case 1813:
case 3947:
case 3079:
case 421:
case 2426:
case 1989:
case 971:
case 188:
case 3380:
case 279:
case 3836:
case 1662:
case 3674:
case 102:
case 3931:
case 3302:
case 596:
case 3510:
case 2887:
case 8:
case 613:
case 186:
case 743:
case 3360:
case 2815:
case 4034:
case 3591:
case 2867:
case 1600:
case 140:
case 1184:
case 2492:
case 3473:
case 2823:
case 935:
case 2798:
case 3847:
case 1086:
case 569:
case 1760:
case 1921:
case 1888:
case 2811:
case 1889:
case 1826:
case 2083:
case 3297:
case 2120:
case 2413:
case 1028:
case 2340:
case 1164:
case 2112:
case 3953:
case 2890:
case 2909:
case 1196:
case 2724:
case 1702:
case 2063:
case 1409:
case 2240:
case 2193:
case 3214:
case 865:
case 652:
case 67:
case 918:
case 873:
case 588:
case 1354:
case 3132:
case 1698:
case 1807:
case 246:
case 2967:
case 1699:
case 280:
case 502:
case 3564:
case 822:
case 3455:
case 3831:
case 586:
case 3314:
case 248:
case 2680:
case 2987:
case 1487:
case 3433:
case 3448:
case 1017:
case 540:
case 2552:
case 3105:
case 1519:
case 4015:
case 3371:
case 1518:
case 1775:
case 1388:
case 1030:
case 2143:
case 1269:
case 1268:
case 1389:
case 515:
case 2323:
case 4067:
case 735:
case 2139:
case 2733:
case 762:
case 3559:
case 564:
case 3897:
case 2442:
case 3609:
case 1226:
case 1289:
case 2211:
case 1942:
case 2390:
case 2755:
case 1506:
case 1369:
case 491:
case 2635:
case 3247:
case 378:
case 2223:
case 551:
case 1325:
case 2675:
case 904:
case 1776:
case 4016:
case 230:
case 1145:
case 3106:
case 3713:
case 1159:
case 601:
case 3498:
case 2773:
case 806:
case 1158:
case 526:
case 3615:
case 718:
case 648:
case 819:
case 3231:
case 1649:
case 1070:
case 1225:
case 1648:
case 680:
case 2179:
case 2178:
case 3119:
case 709:
case 3118:
case 3546:
case 528:
case 3331:
case 1655:
case 4009:
case 1735:
case 646:
case 4008:
case 3814:
case 2566:
case 2157:
case 3276:
case 3353:
case 1563:
case 2216:
case 3335:
case 1501:
case 349:
case 2934:
case 2586:
case 2671:
case 2208:
case 3725:
case 3376:
case 1141:
case 3253:
case 164:
case 1440:
case 995:
case 3707:
case 1583:
case 400:
case 3537:
case 311:
case 56:
case 1434:
case 3577:
case 2387:
case 3020:
case 2565:
case 4090:
case 3802:
case 2215:
case 2631:
case 3769:
case 2751:
case 126:
case 2517:
case 3880:
case 4023:
case 355:
case 2287:
case 3101:
case 2367:
case 3726:
case 2585:
case 3788:
case 2454:
case 3482:
case 2315:
case 3236:
case 3012:
case 3860:
case 1747:
case 136:
case 3467:
case 2475:
case 1564:
case 2512:
case 1214:
case 3415:
case 2382:
case 205:
case 2262:
case 1975:
case 3572:
case 668:
case 2593:
case 3807:
case 1132:
case 398:
case 2200:
case 1449:
case 1584:
case 471:
case 3624:
case 2955:
case 1831:
case 2948:
case 1455:
case 2362:
case 861:
case 2282:
case 3195:
case 2949:
case 2077:
case 1314:
case 666:
case 2520:
case 3065:
case 2037:
case 2476:
case 1871:
case 3029:
case 3028:
case 284:
case 2973:
case 1847:
case 3913:
case 3416:
case 3888:
case 3921:
case 103:
case 229:
case 1976:
case 3889:
case 3532:
case 2956:
case 2642:
case 3702:
case 2453:
case 958:
case 742:
case 29:
case 1172:
case 3164:
case 14:
case 3780:
case 1953:
case 3066:
case 931:
case 3094:
case 239:
case 4024:
case 2851:
case 2848:
case 2324:
case 302:
case 1302:
case 2833:
case 1510:
case 2046:
case 2298:
case 1038:
case 1380:
case 388:
case 2130:
case 2855:
case 1043:
case 2431:
case 3550:
case 418:
case 1591:
case 2399:
case 1280:
case 1360:
case 963:
case 2398:
case 3925:
case 1522:
case 2734:
case 2504:
case 657:
case 967:
case 1853:
case 653:
case 3968:
case 3342:
case 85:
case 425:
case 670:
case 2774:
case 1150:
case 3490:
case 3714:
case 369:
case 62:
case 2856:
case 2058:
case 28:
case 2059:
case 1640:
case 1947:
case 699:
case 2170:
case 2471:
case 3988:
case 435:
case 3989:
case 1876:
case 833:
case 3411:
case 3110:
case 3926:
case 54:
case 1754:
case 1971:
case 1634:
case 2447:
case 294:
case 3423:
case 2790:
case 2414:
case 1541:
case 1462:
case 2355:
case 2186:
case 2084:
case 1880:
case 2128:
case 2333:
case 2129:
case 2824:
case 1183:
case 1020:
case 3474:
case 1914:
case 1802:
case 887:
case 2255:
case 2096:
case 2194:
case 1012:
case 763:
case 1860:
case 1093:
case 2233:
case 160:
case 2982:
case 1163:
case 1726:
case 2248:
case 3954:
case 3292:
case 2273:
case 3563:
case 23:
case 315:
case 694:
case 3731:
case 149:
case 576:
case 3501:
case 1276:
case 3221:
case 767:
case 1353:
case 991:
case 2165:
case 3583:
case 3392:
case 2689:
case 2095:
case 578:
case 1235:
case 2117:
case 1725:
case 3321:
case 485:
case 1376:
case 270:
case 3141:
case 1253:
case 3313:
case 253:
case 2460:
case 3307:
case 2161:
case 1498:
case 1499:
case 1792:
case 845:
case 2103:
case 1721:
case 443:
case 3776:
case 2999:
case 1004:
case 3145:
case 2022:
case 4073:
case 2998:
case 2480:
case 3207:
case 1118:
case 3505:
case 2010:
case 1902:
case 2709:
case 2538:
case 2539:
case 4056:
case 3070:
case 3225:
case 3648:
case 1687:
case 3753:
case 1980:
case 40:
case 1616:
case 3030:
case 2251:
case 495:
case 3389:
case 2715:
case 1127:
case 721:
case 3673:
case 549:
case 756:
case 3044:
case 69:
case 900:
case 3775:
case 212:
case 1545:
case 3289:
case 3368:
case 289:
case 4048:
case 3942:
case 2351:
case 1247:
case 731:
case 758:
case 224:
case 859:
case 2787:
case 1897:
case 1559:
case 1558:
case 3226:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1754046002/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,];
var gg_b = "1754046002/";

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
