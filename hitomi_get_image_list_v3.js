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
case 3376:
case 682:
case 810:
case 2612:
case 771:
case 2508:
case 2081:
case 1921:
case 3797:
case 561:
case 3111:
case 2625:
case 225:
case 494:
case 3318:
case 1889:
case 1301:
case 1347:
case 2483:
case 158:
case 1325:
case 1905:
case 3523:
case 1763:
case 3102:
case 3674:
case 1549:
case 1944:
case 4051:
case 2946:
case 1312:
case 428:
case 3296:
case 1796:
case 3644:
case 2488:
case 2936:
case 1579:
case 1974:
case 876:
case 2095:
case 3263:
case 1934:
case 1539:
case 1768:
case 1337:
case 3605:
case 3784:
case 3498:
case 2637:
case 2600:
case 3085:
case 1297:
case 3621:
case 493:
case 2115:
case 1861:
case 3466:
case 140:
case 2503:
case 3346:
case 1103:
case 187:
case 2122:
case 3762:
case 30:
case 3313:
case 3090:
case 974:
case 656:
case 374:
case 2323:
case 269:
case 1485:
case 1922:
case 1098:
case 123:
case 3125:
case 2765:
case 1490:
case 2611:
case 1261:
case 453:
case 809:
case 3147:
case 14:
case 3354:
case 300:
case 1066:
case 368:
case 3760:
case 3928:
case 3101:
case 560:
case 2518:
case 1574:
case 1136:
case 2536:
case 1979:
case 2602:
case 811:
case 1939:
case 2134:
case 2576:
case 3863:
case 704:
case 1176:
case 139:
case 1534:
case 3649:
case 2799:
case 1544:
case 703:
case 707:
case 3896:
case 488:
case 2513:
case 862:
case 3679:
case 3067:
case 1956:
case 2105:
case 1159:
case 2954:
case 2559:
case 2610:
case 1260:
case 198:
case 3177:
case 1884:
case 2328:
case 3615:
case 3761:
case 1521:
case 1310:
case 81:
case 285:
case 1862:
case 373:
case 3622:
case 4026:
case 2218:
case 1220:
case 978:
case 335:
case 2031:
case 2694:
case 57:
case 1409:
case 1234:
case 3963:
case 1839:
case 631:
case 2473:
case 157:
case 2803:
case 2396:
case 153:
case 1394:
case 2433:
case 44:
case 4066:
case 964:
case 2448:
case 2368:
case 2700:
case 423:
case 1815:
case 1561:
case 3721:
case 2161:
case 571:
case 2808:
case 1221:
case 3697:
case 761:
case 2478:
case 2747:
case 295:
case 2438:
case 63:
case 3019:
case 424:
case 2986:
case 1984:
case 2189:
case 154:
case 2363:
case 2443:
case 1387:
case 963:
case 2416:
case 2007:
case 1414:
case 4093:
case 1663:
case 3823:
case 3734:
case 3774:
case 649:
case 2041:
case 1244:
case 3035:
case 1849:
case 3996:
case 3720:
case 188:
case 1560:
case 1856:
case 1205:
case 2259:
case 3968:
case 2701:
case 1805:
case 1256:
case 1475:
case 1728:
case 2254:
case 2859:
case 2710:
case 2072:
case 1051:
case 128:
case 2032:
case 1249:
case 503:
case 3194:
case 1844:
case 2846:
case 507:
case 3596:
case 3223:
case 2162:
case 630:
case 1562:
case 363:
case 3426:
case 367:
case 194:
case 692:
case 1757:
case 484:
case 2586:
case 1584:
case 2184:
case 2208:
case 1821:
case 3715:
case 1453:
case 2711:
case 440:
case 487:
case 2665:
case 1215:
case 2197:
case 1597:
case 1961:
case 364:
case 2203:
case 197:
case 193:
case 1399:
case 1458:
case 1222:
case 2836:
case 2017:
case 1239:
case 1834:
case 504:
case 3660:
case 1445:
case 4:
case 378:
case 3009:
case 1427:
case 3452:
case 3228:
case 1048:
case 917:
case 1825:
case 3711:
case 1440:
case 1073:
case 2689:
case 2009:
case 1055:
case 2660:
case 2756:
case 3042:
case 1754:
case 1801:
case 1389:
case 2228:
case 3017:
case 709:
case 545:
case 2187:
case 632:
case 3836:
case 3702:
case 1587:
case 2596:
case 1594:
case 1999:
case 3813:
case 1202:
case 3254:
case 1168:
case 3859:
case 3710:
case 1361:
case 1407:
case 1016:
case 1430:
case 459:
case 1837:
case 803:
case 762:
case 1965:
case 995:
case 2661:
case 2715:
case 2426:
case 1703:
case 3162:
case 263:
case 1424:
case 1038:
case 314:
case 2053:
case 3070:
case 3712:
case 1429:
case 3007:
case 3725:
case 1565:
case 3438:
case 2165:
case 955:
case 3747:
case 3024:
case 1277:
case 2019:
case 1237:
case 1200:
case 3986:
case 2720:
case 3259:
case 3701:
case 3854:
case 1718:
case 1736:
case 1802:
case 2774:
case 3687:
case 2451:
case 3213:
case 1432:
case 1776:
case 2823:
case 2075:
case 3246:
case 2035:
case 1599:
case 2199:
case 1994:
case 3071:
case 650:
case 1746:
case 3031:
case 2045:
case 3455:
case 2963:
case 1713:
case 3236:
case 4088:
case 2705:
case 2386:
case 2828:
case 1384:
case 1810:
case 2004:
case 69:
case 235:
case 3737:
case 3700:
case 2058:
case 3777:
case 3448:
case 3368:
case 1247:
case 3161:
case 87:
case 566:
case 1212:
case 3803:
case 317:
case 2450:
case 2857:
case 2868:
case 3610:
case 2303:
case 1322:
case 1894:
case 3513:
case 1902:
case 51:
case 1083:
case 2639:
case 2923:
case 273:
case 1481:
case 1379:
case 681:
case 199:
case 2177:
case 3328:
case 2100:
case 562:
case 1911:
case 925:
case 1265:
case 3908:
case 2761:
case 511:
case 1547:
case 1608:
case 1525:
case 2125:
case 138:
case 3611:
case 200:
case 2354:
case 3064:
case 274:
case 2957:
case 860:
case 1349:
case 1469:
case 3903:
case 465:
case 1480:
case 3576:
case 745:
case 2863:
case 509:
case 3174:
case 808:
case 2649:
case 3799:
case 4006:
case 268:
case 68:
case 2656:
case 3518:
case 2101:
case 446:
case 434:
case 2605:
case 1659:
case 1510:
case 3080:
case 3794:
case 3488:
case 1646:
case 3095:
case 3976:
case 812:
case 1344:
case 3122:
case 2466:
case 969:
case 4073:
case 2090:
case 2557:
case 2313:
case 3637:
case 1305:
case 2359:
case 3069:
case 4048:
case 175:
case 766:
case 2111:
case 1320:
case 1511:
case 985:
case 3625:
case 2797:
case 4038:
case 3286:
case 2318:
case 1900:
case 429:
case 2336:
case 1374:
case 4016:
case 1334:
case 159:
case 219:
case 2376:
case 2102:
case 3787:
case 636:
case 2674:
case 2091:
case 1676:
case 2634:
case 142:
case 1123:
case 3946:
case 2296:
case 1294:
case 318:
case 902:
case 201:
case 433:
case 3601:
case 510:
case 672:
case 1957:
case 4058:
case 174:
case 2512:
case 1112:
case 987:
case 3098:
case 3922:
case 2349:
case 3490:
case 1125:
case 238:
case 1147:
case 551:
case 3261:
case 1789:
case 2356:
case 3311:
case 2495:
case 2910:
case 4027:
case 1092:
case 1928:
case 3118:
case 4045:
case 892:
case 3574:
case 3136:
case 3176:
case 1863:
case 2480:
case 3623:
case 435:
case 9:
case 4004:
case 3949:
case 2894:
case 2299:
case 3146:
case 1303:
case 1639:
case 1067:
case 1679:
case 886:
case 341:
case 55:
case 78:
case 3113:
case 1868:
case 645:
case 4035:
case 958:
case 2537:
case 1100:
case 2500:
case 1137:
case 3289:
case 3884:
case 1177:
case 2577:
case 3521:
case 2265:
case 2911:
case 177:
case 984:
case 324:
case 4019:
case 2481:
case 3657:
case 1493:
case 384:
case 1336:
case 2374:
case 666:
case 3262:
case 463:
case 1797:
case 3921:
case 3108:
case 2320:
case 2511:
case 2865:
case 1318:
case 3284:
case 3889:
case 3301:
case 101:
case 3467:
case 3347:
case 3860:
case 358:
case 1620:
case 780:
case 2618:
case 3556:
case 3154:
case 2676:
case 242:
case 72:
case 2636:
case 941:
case 2502:
case 3549:
case 2294:
case 1296:
case 3312:
case 3:
case 478:
case 2646:
case 3796:
case 1644:
case 852:
case 2613:
case 3974:
case 3934:
case 2128:
case 3768:
case 1605:
case 3337:
case 3920:
case 2510:
case 1498:
case 464:
case 2786:
case 275:
case 2947:
case 591:
case 3297:
case 1621:
case 3103:
case 927:
case 2912:
case 1466:
case 923:
case 2344:
case 1557:
case 1313:
case 2157:
case 10:
case 548:
case 3475:
case 3256:
case 790:
case 3805:
case 2168:
case 1568:
case 2441:
case 609:
case 3051:
case 2361:
case 732:
case 988:
case 2594:
case 233:
case 3844:
case 2999:
case 2196:
case 1739:
case 1223:
case 856:
case 1779:
case 58:
case 2424:
case 163:
case 3419:
case 394:
case 611:
case 3757:
case 2078:
case 2800:
case 2837:
case 1014:
case 2470:
case 2016:
case 2407:
case 3989:
case 2877:
case 3584:
case 3453:
case 2440:
case 2825:
case 3961:
case 2847:
case 3215:
case 1689:
case 2033:
case 164:
case 4085:
case 397:
case 2048:
case 3404:
case 3874:
case 2587:
case 822:
case 1563:
case 2163:
case 3239:
case 1749:
case 3365:
case 178:
case 2754:
case 2801:
case 1228:
case 2389:
case 1452:
case 2471:
case 2431:
case 2759:
case 3668:
case 2384:
case 2201:
case 1828:
case 1705:
case 135:
case 544:
case 536:
case 2006:
case 1004:
case 2810:
case 3696:
case 2746:
case 468:
case 2362:
case 2442:
case 3052:
case 1027:
case 3409:
case 3274:
case 2713:
case 2987:
case 3879:
case 4092:
case 3839:
case 3234:
case 1045:
case 357:
case 997:
case 1662:
case 805:
case 1450:
case 400:
case 1684:
case 1058:
case 2686:
case 2225:
case 265:
case 3815:
case 1721:
case 521:
case 2247:
case 791:
case 3221:
case 1697:
case 473:
case 477:
case 2811:
case 1165:
case 2237:
case 2200:
case 3984:
case 3589:
case 354:
case 289:
case 676:
case 1823:
case 3663:
case 2802:
case 79:
case 2599:
case 1199:
case 3244:
case 1996:
case 928:
case 1720:
case 2718:
case 3205:
case 750:
case 543:
case 4067:
case 1443:
case 929:
case 1712:
case 1007:
case 3429:
case 880:
case 1030:
case 2962:
case 195:
case 3811:
case 1725:
case 1747:
case 2221:
case 1024:
case 2984:
case 1986:
case 3200:
case 3237:
case 66:
case 3397:
case 1854:
case 3718:
case 1687:
case 3802:
case 3776:
case 3432:
case 937:
case 3994:
case 3599:
case 2849:
case 3362:
case 3442:
case 1031:
case 3746:
case 2839:
case 946:
case 2234:
case 934:
case 2274:
case 2409:
case 3987:
case 3713:
case 2879:
case 2668:
case 3759:
case 3201:
case 749:
case 3006:
case 3417:
case 2220:
case 106:
case 1700:
case 1737:
case 469:
case 3686:
case 1777:
case 1448:
case 1161:
case 3247:
case 3225:
case 752:
case 1433:
case 257:
case 117:
case 1803:
case 1473:
case 1040:
case 661:
case 4064:
case 73:
case 844:
case 2399:
case 3048:
case 3812:
case 297:
case 1203:
case 2961:
case 2597:
case 3847:
case 3708:
case 792:
case 3440:
case 3825:
case 3360:
case 730:
case 3033:
case 2820:
case 1818:
case 3389:
case 3754:
case 1042:
case 334:
case 3163:
case 346:
case 2239:
case 881:
case 2279:
case 3587:
case 1702:
case 2874:
case 1699:
case 418:
case 3196:
case 337:
case 2844:
case 660:
case 2249:
case 3202:
case 1813:
case 1859:
case 1254:
case 2475:
case 2805:
case 3441:
case 1072:
case 2051:
case 3361:
case 3430:
case 1029:
case 3407:
case 1184:
case 1586:
case 2186:
case 3470:
case 556:
case 3211:
case 786:
case 155:
case 425:
case 2419:
case 3424:
case 820:
case 3078:
case 989:
case 4017:
case 3901:
case 2768:
case 3659:
case 3510:
case 2920:
case 705:
case 549:
case 2:
case 2796:
case 1139:
case 1976:
case 891:
case 3613:
case 3287:
case 2579:
case 1179:
case 4042:
case 1122:
case 3344:
case 1503:
case 2103:
case 240:
case 671:
case 3157:
case 53:
case 3786:
case 1637:
case 3482:
case 1115:
case 2515:
case 2861:
case 3947:
case 552:
case 938:
case 125:
case 89:
case 3320:
case 1647:
case 3900:
case 1286:
case 4029:
case 359:
case 1612:
case 3502:
case 342:
case 1946:
case 2549:
case 1149:
case 2860:
case 118:
case 2325:
case 1483:
case 531:
case 1959:
case 1601:
case 1156:
case 2159:
case 4041:
case 1559:
case 2505:
case 1105:
case 298:
case 102:
case 1610:
case 3315:
case 2544:
case 3322:
case 2949:
case 3299:
case 241:
case 2113:
case 3902:
case 1513:
case 942:
case 3083:
case 3603:
case 3379:
case 832:
case 3577:
case 2884:
case 3537:
case 756:
case 2093:
case 3265:
case 4070:
case 3911:
case 85:
case 4030:
case 1121:
case 975:
case 592:
case 1765:
case 4040:
case 2066:
case 530:
case 169:
case 2302:
case 223:
case 2098:
case 2922:
case 2939:
case 239:
case 2534:
case 851:
case 3480:
case 1174:
case 1536:
case 406:
case 4071:
case 1120:
case 2520:
case 3495:
case 603:
case 607:
case 2097:
case 2550:
case 718:
case 2619:
case 2866:
case 1269:
case 1882:
case 3607:
case 3548:
case 3670:
case 1353:
case 2117:
case 2791:
case 3087:
case 3641:
case 1971:
case 2952:
case 1931:
case 486:
case 3109:
case 271:
case 1280:
case 972:
case 3906:
case 3555:
case 683:
case 1542:
case 366:
case 1532:
case 182:
case 2132:
case 1151:
case 2172:
case 1572:
case 2604:
case 492:
case 3631:
case 3671:
case 1941:
case 835:
case 2627:
case 430:
case 3883:
case 1970:
case 1930:
case 4008:
case 27:
case 1327:
case 3640:
case 3538:
case 3516:
case 2658:
case 2129:
case 1086:
case 3114:
case 2306:
case 3543:
case 506:
case 2785:
case 2893:
case 2293:
case 864:
case 3764:
case 3916:
case 1929:
case 2124:
case 1633:
case 2089:
case 1673:
case 270:
case 3119:
case 1126:
case 698:
case 204:
case 345:
case 3486:
case 449:
case 1541:
case 4059:
case 769:
case 452:
case 3099:
case 3135:
case 122:
case 1655:
case 1972:
case 624:
case 3642:
case 1788:
case 1494:
case 2333:
case 43:
case 4013:
case 2496:
case 1314:
case 623:
case 627:
case 1942:
case 3672:
case 1487:
case 2463:
case 555:
case 156:
case 2343:
case 216:
case 1571:
case 2552:
case 1152:
case 2131:
case 1531:
case 4018:
case 2338:
case 2378:
case 2298:
case 431:
case 3948:
case 207:
case 1678:
case 2266:
case 3973:
case 1869:
case 867:
case 3933:
case 1616:
case 2061:
case 639:
case 3351:
case 702:
case 2950:
case 3731:
case 422:
case 713:
case 2044:
case 3771:
case 3167:
case 1241:
case 1390:
case 2005:
case 3680:
case 2423:
case 376:
case 152:
case 212:
case 1832:
case 2851:
case 654:
case 1872:
case 2704:
case 3816:
case 1829:
case 2758:
case 3669:
case 3077:
case 2226:
case 3037:
case 3000:
case 706:
case 2593:
case 80:
case 149:
case 1270:
case 1230:
case 26:
case 688:
case 3408:
case 909:
case 2690:
case 2753:
case 1391:
case 91:
case 3730:
case 3012:
case 819:
case 3681:
case 131:
case 2850:
case 518:
case 3403:
case 3873:
case 1166:
case 1564:
case 3724:
case 261:
case 126:
case 795:
case 525:
case 3855:
case 1018:
case 653:
case 3588:
case 3001:
case 1842:
case 2034:
case 1076:
case 1817:
case 801:
case 3741:
case 1036:
case 1410:
case 2074:
case 1271:
case 1231:
case 456:
case 1401:
case 1831:
case 496:
case 1217:
case 1683:
case 2039:
case 1595:
case 2195:
case 693:
case 3436:
case 3255:
case 3476:
case 585:
case 362:
case 3393:
case 2180:
case 186:
case 1580:
case 1412:
case 3273:
case 2966:
case 3729:
case 1716:
case 2169:
case 877:
case 3185:
case 502:
case 3248:
case 2998:
case 1003:
case 2383:
case 3190:
case 1425:
case 1778:
case 1367:
case 628:
case 3238:
case 1400:
case 1870:
case 1830:
case 1748:
case 1477:
case 2993:
case 3011:
case 3243:
case 874:
case 1581:
case 1392:
case 1824:
case 1229:
case 3216:
case 3664:
case 260:
case 1773:
case 1232:
case 976:
case 192:
case 311:
case 3413:
case 1054:
case 1688:
case 130:
case 3446:
case 2056:
case 3002:
case 779:
case 482:
case 3459:
case 3398:
case 869:
case 568:
case 3993:
case 2011:
case 2243:
case 1666:
case 1214:
case 633:
case 2664:
case 209:
case 96:
case 2278:
case 1698:
case 764:
case 2717:
case 1591:
case 1967:
case 2191:
case 2459:
case 3049:
case 1382:
case 1875:
case 1405:
case 3709:
case 211:
case 3251:
case 629:
case 308:
case 2366:
case 2446:
case 3056:
case 3692:
case 1444:
case 2988:
case 1992:
case 2476:
case 3180:
case 2393:
case 1751:
case 961:
case 2010:
case 767:
case 2418:
case 802:
case 1827:
case 3667:
case 3079:
case 3039:
case 1845:
case 3998:
case 15:
case 885:
case 443:
case 2190:
case 3169:
case 42:
case 2233:
case 190:
case 1585:
case 3250:
case 634:
case 2025:
case 3457:
case 501:
case 2833:
case 2724:
case 1422:
case 2873:
case 1726:
case 210:
case 1415:
case 19:
case 3753:
case 2770:
case 3182:
case 2730:
case 2741:
case 818:
case 3691:
case 519:
case 3034:
case 3252:
case 3428:
case 1439:
case 3020:
case 1479:
case 1188:
case 2001:
case 2588:
case 3005:
case 1449:
case 1369:
case 3851:
case 276:
case 908:
case 1235:
case 481:
case 1752:
case 2771:
case 1275:
case 2583:
case 2167:
case 1567:
case 1991:
case 50:
case 3690:
case 1253:
case 2408:
case 36:
case 2000:
case 1219:
case 1814:
case 2669:
case 3758:
case 2843:
case 3593:
case 567:
case 777:
case 3552:
case 563:
case 1527:
case 3378:
case 2288:
case 2632:
case 2506:
case 316:
case 2955:
case 1106:
case 1504:
case 2104:
case 1909:
case 1651:
case 49:
case 2629:
case 1558:
case 3614:
case 2973:
case 3950:
case 1885:
case 1332:
case 1372:
case 307:
case 303:
case 1890:
case 1317:
case 1553:
case 304:
case 245:
case 2938:
case 97:
case 3130:
case 3107:
case 1798:
case 1484:
case 3170:
case 2943:
case 3355:
case 1650:
case 2065:
case 3293:
case 370:
case 1914:
case 181:
case 699:
case 3951:
case 3609:
case 2350:
case 3373:
case 2642:
case 3792:
case 774:
case 564:
case 3141:
case 1891:
case 491:
case 2135:
case 1535:
case 3468:
case 2671:
case 1652:
case 1935:
case 1975:
case 1096:
case 2631:
case 1460:
case 3645:
case 2795:
case 2883:
case 1867:
case 3627:
case 1291:
case 4023:
case 3551:
case 2780:
case 3132:
case 813:
case 970:
case 2114:
case 1919:
case 3129:
case 2516:
case 3658:
case 3306:
case 3893:
case 136:
case 535:
case 144:
case 1371:
case 1331:
case 904:
case 2538:
case 2640:
case 1178:
case 895:
case 12:
case 1341:
case 3653:
case 490:
case 1290:
case 2670:
case 2607:
case 2548:
case 3550:
case 3097:
case 2781:
case 1133:
case 4057:
case 2624:
case 3619:
case 3866:
case 916:
case 2109:
case 371:
case 675:
case 2641:
case 4028:
case 719:
case 1945:
case 1370:
case 3675:
case 3635:
case 1307:
case 3881:
case 2462:
case 3633:
case 2342:
case 3929:
case 1916:
case 3524:
case 3126:
case 1119:
case 2766:
case 3673:
case 1978:
case 145:
case 1938:
case 1153:
case 546:
case 4000:
case 3570:
case 2798:
case 2484:
case 1782:
case 3648:
case 3507:
case 2267:
case 2891:
case 1283:
case 476:
case 1135:
case 2535:
case 1099:
case 3932:
case 3655:
case 738:
case 322:
case 281:
case 3972:
case 3788:
case 673:
case 2329:
case 1288:
case 2292:
case 1672:
case 2651:
case 674:
case 2909:
case 1955:
case 1506:
case 3880:
case 1632:
case 3571:
case 600:
case 3531:
case 529:
case 3895:
case 4001:
case 2527:
case 828:
case 4025:
case 410:
case 2890:
case 3540:
case 3678:
case 28:
case 815:
case 220:
case 2558:
case 1629:
case 1158:
case 3264:
case 3869:
case 1351:
case 3643:
case 2885:
case 854:
case 2285:
case 3150:
case 2173:
case 1624:
case 41:
case 1533:
case 3940:
case 2148:
case 1548:
case 1607:
case 3335:
case 3375:
case 3295:
case 759:
case 1087:
case 3971:
case 2370:
case 462:
case 2904:
case 2155:
case 60:
case 956:
case 3280:
case 1326:
case 3319:
case 3542:
case 4002:
case 3358:
case 1780:
case 382:
case 565:
case 775:
case 221:
case 3151:
case 619:
case 2096:
case 2975:
case 2935:
case 2652:
case 1671:
case 411:
case 1094:
case 2291:
case 2340:
case 1883:
case 2331:
case 3930:
case 1352:
case 3907:
case 3327:
case 1578:
case 3465:
case 1640:
case 2953:
case 1769:
case 1516:
case 409:
case 853:
case 3086:
case 1543:
case 3281:
case 3871:
case 3401:
case 1418:
case 2845:
case 3595:
case 3217:
case 599:
case 2827:
case 2992:
case 4087:
case 1988:
case 664:
case 2751:
case 1772:
case 3580:
case 386:
case 841:
case 1806:
case 1476:
case 1255:
case 1273:
case 3412:
case 1233:
case 931:
case 1185:
case 1248:
case 737:
case 3425:
case 3840:
case 3778:
case 2853:
case 746:
case 3437:
case 3748:
case 3477:
case 1682:
case 3830:
case 3807:
case 1011:
case 2750:
case 3581:
case 1664:
case 1216:
case 3733:
case 3392:
case 2666:
case 392:
case 3755:
case 952:
case 538:
case 1413:
case 111:
case 4094:
case 251:
case 3688:
case 1742:
case 667:
case 3054:
case 2444:
case 663:
case 1366:
case 1002:
case 3841:
case 2967:
case 2591:
case 1717:
case 1983:
case 2405:
case 2875:
case 3046:
case 2456:
case 1771:
case 2235:
case 3013:
case 3241:
case 2991:
case 2567:
case 3390:
case 2183:
case 2369:
case 3059:
case 3385:
case 352:
case 575:
case 1680:
case 992:
case 3402:
case 3872:
case 887:
case 1669:
case 3224:
case 3829:
case 840:
case 445:
case 1037:
case 2219:
case 349:
case 3981:
case 4065:
case 3207:
case 1408:
case 3411:
case 1838:
case 2253:
case 1740:
case 3240:
case 542:
case 3391:
case 29:
case 1848:
case 3582:
case 1730:
case 331:
case 110:
case 1873:
case 1403:
case 3969:
case 2258:
case 1833:
case 1724:
case 3564:
case 2204:
case 2809:
case 1855:
case 3980:
case 1206:
case 2439:
case 986:
case 3018:
case 2592:
case 2188:
case 1001:
case 3817:
case 789:
case 3076:
case 559:
case 3410:
case 2227:
case 3271:
case 788:
case 932:
case 3985:
case 1850:
case 231:
case 403:
case 859:
case 1457:
case 3422:
case 2564:
case 3258:
case 2969:
case 3726:
case 2166:
case 2391:
case 39:
case 3415:
case 606:
case 2198:
case 1598:
case 4061:
case 2582:
case 1691:
case 3227:
case 1074:
case 584:
case 416:
case 2231:
case 1775:
case 1735:
case 1428:
case 1252:
case 2980:
case 3204:
case 161:
case 842:
case 2842:
case 3592:
case 3188:
case 613:
case 1005:
case 2059:
case 3449:
case 951:
case 1851:
case 2872:
case 391:
case 2832:
case 2385:
case 112:
case 1423:
case 3235:
case 753:
case 1044:
case 3275:
case 3456:
case 540:
case 2390:
case 3183:
case 348:
case 3567:
case 1727:
case 2230:
case 2270:
case 3253:
case 1690:
case 3395:
case 404:
case 2224:
case 1758:
case 2829:
case 2981:
case 1021:
case 1685:
case 2193:
case 2008:
case 3750:
case 1993:
case 2773:
case 1826:
case 3819:
case 3666:
case 47:
case 4084:
case 2748:
case 2477:
case 3698:
case 2830:
case 2870:
case 2400:
case 948:
case 3023:
case 655:
case 2841:
case 3967:
case 3382:
case 1049:
case 793:
case 2272:
case 351:
case 292:
case 1056:
case 230:
case 2688:
case 2054:
case 1692:
case 3434:
case 3474:
case 3804:
case 679:
case 2831:
case 2401:
case 471:
case 1079:
case 1667:
case 3827:
case 3845:
case 524:
case 2595:
case 2217:
case 1039:
case 1022:
case 2982:
case 541:
case 2367:
case 99:
case 3057:
case 2778:
case 35:
case 2738:
case 3590:
case 2569:
case 1714:
case 1966:
case 950:
case 728:
case 3585:
case 899:
case 1015:
case 553:
case 783:
case 557:
case 3096:
case 787:
case 408:
case 4056:
case 3340:
case 1645:
case 3460:
case 2151:
case 4049:
case 1172:
case 1551:
case 2572:
case 1132:
case 2606:
case 1926:
case 3919:
case 1084:
case 1658:
case 3116:
case 2304:
case 205:
case 336:
case 1306:
case 3371:
case 2907:
case 2930:
case 2970:
case 7:
case 3331:
case 3138:
case 2465:
case 1790:
case 618:
case 3178:
case 17:
case 98:
case 1653:
case 2940:
case 2375:
case 1898:
case 3148:
case 2335:
case 588:
case 1550:
case 4022:
case 2269:
case 343:
case 2864:
case 3173:
case 1866:
case 347:
case 1619:
case 2280:
case 3904:
case 4079:
case 3892:
case 4039:
case 3927:
case 3945:
case 2353:
case 1117:
case 554:
case 3063:
case 2295:
case 784:
case 2931:
case 2971:
case 3307:
case 1131:
case 2531:
case 461:
case 724:
case 2783:
case 2917:
case 2895:
case 1338:
case 4074:
case 837:
case 4034:
case 256:
case 2880:
case 3106:
case 1463:
case 2487:
case 3909:
case 3504:
case 3558:
case 2869:
case 1266:
case 980:
case 1614:
case 3885:
case 1950:
case 1061:
case 107:
case 2282:
case 1298:
case 92:
case 3890:
case 2540:
case 739:
case 3553:
case 3484:
case 2530:
case 2648:
case 1130:
case 2570:
case 2309:
case 3650:
case 1355:
case 944:
case 3766:
case 1526:
case 170:
case 2673:
case 2633:
case 2929:
case 1609:
case 834:
case 2972:
case 2932:
case 2655:
case 1496:
case 1373:
case 1333:
case 4005:
case 2541:
case 1141:
case 3535:
case 1468:
case 1348:
case 593:
case 412:
case 597:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1750755601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,];
var gg_b = "1750755601/";

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
