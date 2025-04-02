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
case 2635:
case 3778:
case 205:
case 346:
case 1133:
case 3196:
case 2711:
case 2280:
case 249:
case 2722:
case 2999:
case 2009:
case 961:
case 3694:
case 3386:
case 907:
case 3293:
case 152:
case 3201:
case 3862:
case 3432:
case 992:
case 282:
case 3808:
case 1670:
case 2044:
case 2242:
case 1236:
case 3375:
case 2892:
case 2263:
case 3732:
case 2664:
case 1607:
case 1693:
case 1601:
case 1092:
case 1294:
case 786:
case 3119:
case 1510:
case 743:
case 677:
case 2124:
case 1752:
case 1968:
case 131:
case 3270:
case 2509:
case 889:
case 957:
case 3207:
case 197:
case 647:
case 1809:
case 824:
case 680:
case 2376:
case 2717:
case 3134:
case 1779:
case 255:
case 872:
case 3334:
case 347:
case 3702:
case 1381:
case 1637:
case 2176:
case 1206:
case 888:
case 2058:
case 4026:
case 2039:
case 3838:
case 500:
case 3402:
case 3859:
case 1284:
case 2798:
case 3813:
case 2395:
case 111:
case 3945:
case 3029:
case 2221:
case 1528:
case 2273:
case 1103:
case 1148:
case 1191:
case 2828:
case 2674:
case 2014:
case 1028:
case 2840:
case 787:
case 48:
case 1197:
case 2227:
case 2514:
case 3149:
case 1978:
case 683:
case 91:
case 278:
case 3260:
case 3104:
case 196:
case 2747:
case 1251:
case 2558:
case 1715:
case 795:
case 2366:
case 1469:
case 770:
case 1839:
case 1858:
case 3237:
case 4035:
case 1932:
case 1415:
case 3396:
case 2989:
case 3684:
case 2946:
case 740:
case 3657:
case 3283:
case 1038:
case 3558:
case 870:
case 3882:
case 1130:
case 2237:
case 1799:
case 2606:
case 3447:
case 2283:
case 2657:
case 3946:
case 1499:
case 2396:
case 3840:
case 649:
case 100:
case 199:
case 1371:
case 2149:
case 2186:
case 959:
case 887:
case 4025:
case 1922:
case 2260:
case 1013:
case 1911:
case 1673:
case 422:
case 2945:
case 2872:
case 3324:
case 655:
case 1416:
case 1572:
case 1690:
case 3221:
case 1377:
case 909:
case 990:
case 3212:
case 3674:
case 3828:
case 280:
case 1300:
case 2334:
case 2768:
case 3176:
case 3498:
case 3150:
case 3185:
case 2468:
case 2231:
case 2353:
case 277:
case 2859:
case 3741:
case 4051:
case 3717:
case 2134:
case 441:
case 355:
case 514:
case 3385:
case 6:
case 552:
case 471:
case 3626:
case 772:
case 2119:
case 3788:
case 3810:
case 1361:
case 3195:
case 1100:
case 1008:
case 1043:
case 1998:
case 724:
case 2165:
case 1941:
case 873:
case 1663:
case 2636:
case 1177:
case 1062:
case 789:
case 1508:
case 585:
case 2694:
case 3999:
case 2843:
case 1746:
case 3242:
case 22:
case 2304:
case 2969:
case 2732:
case 2375:
case 597:
case 246:
case 3411:
case 305:
case 56:
case 3166:
case 379:
case 283:
case 502:
case 531:
case 4084:
case 4057:
case 3255:
case 276:
case 3711:
case 648:
case 349:
case 2545:
case 670:
case 1224:
case 427:
case 1022:
case 2194:
case 695:
case 145:
case 1011:
case 1913:
case 1671:
case 190:
case 1321:
case 3164:
case 3277:
case 2579:
case 950:
case 175:
case 849:
case 2552:
case 3135:
case 1409:
case 2306:
case 3089:
case 1852:
case 3046:
case 1588:
case 2281:
case 2710:
case 1744:
case 2696:
case 2384:
case 1444:
case 805:
case 1709:
case 783:
case 2357:
case 3958:
case 2233:
case 2351:
case 3939:
case 3762:
case 855:
case 3743:
case 2653:
case 3462:
case 506:
case 2254:
case 2052:
case 564:
case 1088:
case 3408:
case 3443:
case 3832:
case 1180:
case 1155:
case 3589:
case 3878:
case 3624:
case 2929:
case 3695:
case 159:
case 224:
case 3223:
case 373:
case 3271:
case 2079:
case 289:
case 1327:
case 1390:
case 3914:
case 2811:
case 1017:
case 1522:
case 1677:
case 2136:
case 1163:
case 2045:
case 1511:
case 2218:
case 2822:
case 1600:
case 343:
case 1041:
case 1098:
case 1943:
case 1127:
case 1190:
case 3599:
case 1815:
case 1547:
case 1962:
case 2297:
case 1758:
case 1661:
case 3267:
case 4065:
case 1342:
case 2482:
case 3105:
case 1439:
case 2336:
case 557:
case 643:
case 193:
case 777:
case 3016:
case 3230:
case 747:
case 44:
case 998:
case 1414:
case 3326:
case 4053:
case 3650:
case 2106:
case 1630:
case 2428:
case 3472:
case 3516:
case 395:
case 2184:
case 2157:
case 3413:
case 507:
case 592:
case 903:
case 3802:
case 3261:
case 3459:
case 221:
case 878:
case 3099:
case 387:
case 2604:
case 2248:
case 2203:
case 1173:
case 1541:
case 2675:
case 2015:
case 848:
case 3738:
case 1047:
case 3364:
case 3325:
case 558:
case 3649:
case 1910:
case 2944:
case 2868:
case 3394:
case 1697:
case 2438:
case 3069:
case 1356:
case 321:
case 748:
case 3248:
case 1370:
case 2909:
case 593:
case 3898:
case 2364:
case 1307:
case 3841:
case 157:
case 2772:
case 415:
case 2335:
case 3106:
case 240:
case 4066:
case 295:
case 1131:
case 270:
case 2016:
case 2676:
case 1137:
case 3740:
case 1729:
case 2230:
case 388:
case 3440:
case 689:
case 2650:
case 2685:
case 624:
case 1429:
case 2326:
case 914:
case 642:
case 1301:
case 3782:
case 3847:
case 1393:
case 161:
case 1899:
case 4024:
case 107:
case 3220:
case 3297:
case 4095:
case 952:
case 3482:
case 672:
case 1992:
case 508:
case 1648:
case 2105:
case 1275:
case 429:
case 1160:
case 3929:
case 2878:
case 2624:
case 3619:
case 389:
case 934:
case 3079:
case 2271:
case 1578:
case 1193:
case 273:
case 3045:
case 2305:
case 3811:
case 11:
case 2374:
case 156:
case 3218:
case 2762:
case 3634:
case 575:
case 2939:
case 3351:
case 2958:
case 3233:
case 2743:
case 372:
case 1982:
case 509:
case 1337:
case 1681:
case 1889:
case 1846:
case 1532:
case 2126:
case 3653:
case 4085:
case 2546:
case 1296:
case 1383:
case 2408:
case 2443:
case 3888:
case 3552:
case 1234:
case 3710:
case 435:
case 876:
case 3306:
case 2135:
case 1253:
case 1331:
case 1654:
case 3410:
case 3384:
case 779:
case 1219:
case 82:
case 3194:
case 1107:
case 2164:
case 1928:
case 1078:
case 1265:
case 481:
case 782:
case 2200:
case 1170:
case 3244:
case 1856:
case 20:
case 262:
case 4040:
case 544:
case 3063:
case 3894:
case 981:
case 3961:
case 3825:
case 2734:
case 574:
case 2570:
case 2991:
case 754:
case 2903:
case 2948:
case 3341:
case 712:
case 1870:
case 411:
case 3055:
case 1976:
case 1400:
case 2465:
case 3724:
case 2835:
case 1026:
case 3795:
case 2765:
case 2419:
case 1316:
case 325:
case 1985:
case 1950:
case 935:
case 3424:
case 1471:
case 3555:
case 165:
case 3580:
case 1146:
case 1035:
case 928:
case 1526:
case 1423:
case 2132:
case 2501:
case 2178:
case 2593:
case 1644:
case 2496:
case 1399:
case 496:
case 1801:
case 2007:
case 766:
case 319:
case 830:
case 2796:
case 3111:
case 3967:
case 3122:
case 2056:
case 2229:
case 638:
case 294:
case 3021:
case 339:
case 2378:
case 3613:
case 3073:
case 541:
case 4010:
case 3012:
case 929:
case 3214:
case 3590:
case 3322:
case 2560:
case 414:
case 360:
case 1430:
case 1505:
case 236:
case 3311:
case 2805:
case 2031:
case 868:
case 2537:
case 3851:
case 1883:
case 318:
case 2954:
case 3659:
case 1767:
case 2704:
case 1389:
case 2486:
case 1761:
case 3388:
case 3884:
case 915:
case 1461:
case 1238:
case 3857:
case 833:
case 1831:
case 1995:
case 2168:
case 2060:
case 79:
case 625:
case 1614:
case 1272:
case 2102:
case 1074:
case 46:
case 767:
case 3521:
case 3785:
case 3977:
case 3027:
case 3198:
case 3573:
case 2317:
case 3168:
case 2485:
case 2776:
case 89:
case 4043:
case 4008:
case 1919:
case 2750:
case 2785:
case 2521:
case 1812:
case 2141:
case 2198:
case 832:
case 1379:
case 2476:
case 2090:
case 2512:
case 2806:
case 1934:
case 1352:
case 3981:
case 1403:
case 403:
case 3083:
case 3682:
case 1051:
case 733:
case 1953:
case 3531:
case 691:
case 141:
case 662:
case 1703:
case 60:
case 1584:
case 3475:
case 2239:
case 94:
case 1551:
case 498:
case 2258:
case 65:
case 3404:
case 3749:
case 768:
case 616:
case 3786:
case 3537:
case 3332:
case 218:
case 3775:
case 2638:
case 1497:
case 1996:
case 3449:
case 3704:
case 3583:
case 1827:
case 1890:
case 239:
case 2147:
case 3229:
case 2590:
case 2527:
case 2214:
case 710:
case 2971:
case 3378:
case 851:
case 3560:
case 1169:
case 2322:
case 3805:
case 336:
case 4013:
case 1949:
case 3610:
case 3593:
case 4072:
case 3501:
case 1733:
case 219:
case 804:
case 2347:
case 1487:
case 3007:
case 3997:
case 1094:
case 2967:
case 35:
case 1863:
case 2542:
case 2111:
case 3796:
case 1025:
case 1787:
case 1536:
case 1975:
case 2563:
case 3056:
case 1433:
case 2466:
case 1369:
case 400:
case 1754:
case 174:
case 1718:
case 2580:
case 3826:
case 3132:
case 4038:
case 1880:
case 144:
case 2188:
case 3465:
case 263:
case 2795:
case 3419:
case 225:
case 3765:
case 2424:
case 2643:
case 362:
case 2608:
case 30:
case 1781:
case 1594:
case 3734:
case 3453:
case 2961:
case 2894:
case 1036:
case 3368:
case 1145:
case 3556:
case 2063:
case 3903:
case 1481:
case 3093:
case 3991:
case 3001:
case 2398:
case 3570:
case 3692:
case 2209:
case 3507:
case 337:
case 3434:
case 854:
case 725:
case 1053:
case 3382:
case 1793:
case 69:
case 3554:
case 1232:
case 1034:
case 763:
case 2289:
case 1596:
case 1401:
case 493:
case 17:
case 2523:
case 354:
case 1645:
case 837:
case 1329:
case 515:
case 3340:
case 2927:
case 2990:
case 2143:
case 1278:
case 891:
case 1019:
case 3192:
case 1679:
case 80:
case 126:
case 862:
case 3245:
case 4047:
case 269:
case 816:
case 3824:
case 3110:
case 3895:
case 2372:
case 2577:
case 2865:
case 304:
case 2023:
case 1800:
case 230:
case 1565:
case 2973:
case 2611:
case 719:
case 2500:
case 2464:
case 3252:
case 738:
case 3581:
case 1096:
case 1906:
case 2338:
case 408:
case 1456:
case 2764:
case 1707:
case 3425:
case 1957:
case 1984:
case 3494:
case 604:
case 3876:
case 2138:
case 268:
case 2159:
case 2113:
case 3706:
case 528:
case 3457:
case 475:
case 1861:
case 2172:
case 1202:
case 2067:
case 1004:
case 2647:
case 1075:
case 1268:
case 739:
case 3548:
case 1086:
case 1669:
case 3097:
case 1731:
case 894:
case 3128:
case 1549:
case 1586:
case 1737:
case 3602:
case 2299:
case 2343:
case 332:
case 1483:
case 3901:
case 2362:
case 922:
case 535:
case 2942:
case 2567:
case 39:
case 2698:
case 2641:
case 2963:
case 301:
case 1867:
case 2804:
case 1575:
case 459:
case 3269:
case 3451:
case 4088:
case 2474:
case 1830:
case 2530:
case 1460:
case 2980:
case 2955:
case 612:
case 2774:
case 1760:
case 654:
case 581:
case 2705:
case 1727:
case 333:
case 3474:
case 2182:
case 3530:
case 923:
case 3774:
case 1427:
case 1490:
case 1616:
case 128:
case 717:
case 2048:
case 2993:
case 2091:
case 3343:
case 1897:
case 41:
case 232:
case 456:
case 2140:
case 3362:
case 2597:
case 2751:
case 3849:
case 3641:
case 613:
case 3942:
case 98:
case 2451:
case 3963:
case 3067:
case 4078:
case 181:
case 1344:
case 2484:
case 2457:
case 3113:
case 860:
case 3647:
case 2970:
case 2757:
case 2503:
case 1241:
case 2784:
case 1298:
case 794:
case 839:
case 1803:
case 464:
case 2097:
case 1935:
case 1473:
case 630:
case 135:
case 3216:
case 3159:
case 4032:
case 610:
case 2252:
case 1881:
case 3464:
case 3834:
case 2581:
case 2632:
case 3764:
case 2931:
case 1066:
case 3338:
case 1646:
case 1689:
case 668:
case 716:
case 57:
case 1217:
case 1524:
case 457:
case 3372:
case 2110:
case 3735:
case 2678:
case 3313:
case 2328:
case 330:
case 819:
case 3921:
case 204:
case 3622:
case 3577:
case 3500:
case 2279:
case 266:
case 3617:
case 3077:
case 3523:
case 254:
case 737:
case 4002:
case 212:
case 3571:
case 3927:
case 3990:
case 1480:
case 1314:
case 2340:
case 461:
case 1818:
case 70:
case 1222:
case 1024:
case 2960:
case 1095:
case 1905:
case 3726:
case 762:
case 1755:
case 791:
case 1974:
case 2192:
case 633:
case 2533:
case 1339:
case 2436:
case 1463:
case 1833:
case 313:
case 2382:
case 1442:
case 1763:
case 2554:
case 1887:
case 1742:
case 2983:
case 1854:
case 3289:
case 702:
case 1695:
case 1624:
case 1878:
case 76:
case 2940:
case 1914:
case 3390:
case 948:
case 1271:
case 2101:
case 49:
case 2578:
case 797:
case 3163:
case 2360:
case 186:
case 3017:
case 4048:
case 3142:
case 143:
case 432:
case 21:
case 4091:
case 731:
case 978:
case 3266:
case 1958:
case 1743:
case 2982:
case 785:
case 2681:
case 2846:
case 2532:
case 1126:
case 1589:
case 1832:
case 2296:
case 2383:
case 1443:
case 2633:
case 898:
case 2234:
case 3744:
case 3852:
case 1135:
case 3938:
case 589:
case 2687:
case 3959:
case 2654:
case 3709:
case 524:
case 853:
case 3224:
case 3623:
case 542:
case 4020:
case 3295:
case 3671:
case 206:
case 3011:
case 345:
case 3845:
case 1277:
case 1164:
case 608:
case 3879:
case 390:
case 2928:
case 309:
case 714:
case 3373:
case 2618:
case 3312:
case 1200:
case 2910:
case 1868:
case 1438:
case 404:
case 796:
case 1261:
case 2568:
case 3541:
case 3173:
case 4018:
case 187:
case 1099:
case 2307:
case 1738:
case 257:
case 675:
case 4033:
case 308:
case 690:
case 3630:
case 645:
case 1516:
case 4054:
case 170:
case 3285:
case 4087:
case 4081:
case 393:
case 1676:
case 979:
case 2137:
case 1230:
case 3414:
case 3355:
case 949:
case 2183:
case 2429:
case 1326:
case 2249:
case 2286:
case 3190:
case 292:
case 2301:
case 261:
case 2899:
case 207:
case 1267:
case 2204:
case 2992:
case 3869:
case 711:
case 2691:
case 2648:
case 3363:
case 1105:
case 3458:
case 454:
case 750:
case 1847:
case 3393:
case 3301:
case 2908:
case 2943:
case 2190:
case 2815:
case 570:
case 2547:
case 307:
case 2758:
case 3899:
case 2661:
case 361:
case 3648:
case 3603:
case 540:
case 4000:
case 2869:
case 3002:
case 3204:
case 2342:
case 1482:
case 2458:
case 3160:
case 1569:
case 4077:
case 1336:
case 3068:
case 811:
case 3137:
case 2714:
case 293:
case 61:
case 1151:
case 946:
case 3183:
case 258:
case 2630:
case 1428:
case 208:
case 606:
case 3816:
case 2250:
case 1728:
case 1394:
case 3910:
case 1649:
case 1325:
case 896:
case 3568:
case 3356:
case 4023:
case 1069:
case 430:
case 3697:
case 1604:
case 3370:
case 2173:
case 1203:
case 1248:
case 799:
case 2541:
case 2598:
case 1291:
case 357:
case 1841:
case 1898:
case 469:
case 2295:
case 2517:
case 2224:
case 2022:
case 245:
case 3219:
case 2845:
case 1817:
case 2011:
case 2913:
case 1125:
case 2671:
case 3928:
case 2879:
case 980:
case 3170:
case 1579:
case 2312:
case 4067:
case 3265:
case 275:
case 657:
case 1552:
case 3633:
case 4030:
case 2409:
case 947:
case 2588:
case 1281:
case 2959:
case 573:
case 2938:
case 3253:
case 1696:
case 1384:
case 1357:
case 703:
case 3681:
case 3337:
case 63:
case 3982:
case 1287:
case 607:
case 3532:
case 3846:
case 1792:
case 2088:
case 433:
case 3383:
case 3296:
case 259:
case 3193:
case 802:
case 1079:
case 2390:
case 1619:
case 3940:
case 2017:
case 3360:
case 2677:
case 2163:
case 1045:
case 2511:
case 1218:
case 1665:
case 3181:
case 1134:
case 3745:
case 582:
case 203:
case 611:
case 3445:
case 1153:
case 81:
case 3294:
case 3092:
case 3902:
case 1256:
case 331:
case 3968:
case 36:
case 2998:
case 2043:
case 302:
case 1165:
case 3303:
case 2941:
case 3452:
case 3809:
case 1636:
case 2264:
case 2177:
case 1207:
case 2062:
case 1862:
case 2171:
case 352:
case 790:
case 709:
case 1386:
case 2489:
case 1349:
case 460:
case 2562:
case 3397:
case 1843:
case 555:
case 2947:
case 314:
case 2123:
case 1915:
case 1432:
case 4012:
case 4073:
case 3010:
case 12:
case 2367:
case 3670:
case 745:
case 1732:
case 1375:
case 696:
case 146:
case 253:
case 183:
case 176:
case 1196:
case 298:
case 3154:
case 988:
case 3333:
case 3251:
case 2059:
case 2130:
case 3858:
case 3582:
case 3839:
case 942:
case 3415:
case 614:
case 3769:
case 3932:
case 708:
case 1283:
case 5:
case 1684:
case 2499:
case 3120:
case 3197:
case 1529:
case 334:
case 3814:
case 299:
case 200:
case 3978:
case 2829:
case 2371:
case 3540:
case 1186:
case 924:
case 419:
case 2922:
case 1260:
case 396:
case 2673:
case 2274:
case 1104:
case 685:
case 311:
case 2917:
case 2572:
case 83:
case 2690:
case 2627:
case 2513:
case 861:
case 1029:
case 3660:
case 2377:
case 3040:
case 180:
case 1979:
case 2716:
case 3148:
case 4042:
case 147:
case 1334:
case 1651:
case 3206:
case 66:
case 1702:
case 425:
case 631:
case 1353:
case 177:
case 3082:
case 1402:
case 463:
case 3683:
case 4080:
case 3257:
case 4055:
case 2381:
case 1441:
case 3988:
case 1498:
case 1176:
case 1058:
case 3538:
case 1039:
case 1150:
case 2683:
case 2082:
case 1798:
case 73:
case 437:
case 1324:
case 1395:
case 3161:
case 4001:
case 3572:
case 3416:
case 4093:
case 491:
case 3377:
case 1221:
case 2528:
case 2148:
case 2103:
case 707:
case 40:
case 3716:
case 462:
case 3300:
case 1674:
case 1828:
case 1014:
case 2040:
case 300:
case 234:
case 1840:
case 4056:
case 2120:
case 973:
case 1227:
case 2540:
case 1514:
case 577:
case 757:
case 3829:
case 45:
case 943:
case 178:
case 3922:
case 653:
case 3274:
case 3167:
case 3612:
case 986:
case 2318:
case 296:
case 3013:
case 1882:
case 2251:
case 2333:
case 580:
case 2839:
case 2582:
case 3799:
case 2932:
case 2354:
case 2387:
case 2631:
case 1946:
case 1635:
case 105:
case 3330:
case 179:
case 2133:
case 1166:
case 1422:
case 1280:
case 1255:
case 600:
case 1722:
case 1009:
case 3489:
case 252:
case 3171:
case 875:
case 890:
case 3123:
case 3947:
case 2320:
case 3367:
case 2670:
case 2010:
case 845:
case 1242:
case 764:
case 1263:
case 706:
case 2601:
case 2902:
case 2294:
case 71:
case 417:
case 2752:
case 1195:
case 756:
case 2844:
case 231:
case 2303:
case 2391:
case 583:
case 3008:
case 3100:
case 26:
case 3177:
case 546:
case 3663:
case 2452:
case 3235:
case 2479:
case 1376:
case 940:
case 52:
case 650:
case 1717:
case 2779:
case 970:
case 3655:
case 1417:
case 1626:
case 2445:
case 1385:
case 627:
case 3534:
case 470:
case 1252:
case 844:
case 1087:
case 3906:
case 1725:
case 1794:
case 3707:
case 3456:
case 874:
case 3553:
case 440:
case 2066:
case 2646:
case 3984:
case 215:
case 3957:
case 3770:
case 1425:
case 1245:
case 3519:
case 1018:
case 78:
case 487:
case 513:
case 2109:
case 3565:
case 822:
case 3877:
case 229:
case 154:
case 112:
case 994:
case 2480:
case 1340:
case 2455:
case 2818:
case 936:
case 1960:
case 2095:
case 2755:
case 2780:
case 326:
case 2974:
case 3019:
case 2566:
case 3053:
case 1436:
case 2463:
case 3652:
case 2833:
case 1937:
case 34:
case 2442:
case 1587:
case 2763:
case 3034:
case 3232:
case 1554:
case 1081:
case 569:
case 2742:
case 3596:
case 2854:
case 2790:
case 3830:
case 841:
case 2076:
case 2926:
case 871:
case 228:
case 720:
case 568:
case 1003:
case 67:
case 1993:
case 1091:
case 443:
case 2820:
case 3737:
case 2114:
case 3586:
case 2247:
case 3129:
case 1597:
case 1520:
case 486:
case 1751:
case 3437:
case 19:
case 3783:
case 916:
case 1451:
case 3936:
case 3867:
case 167:
case 95:
case 101:
case 3004:
case 3861:
case 2699:
case 2344:
case 281:
case 1310:
case 1484:
case 1457:
case 1706:
case 3925:
case 3268:
case 90:
case 962:
case 2309:
case 1406:
case 1757:
case 3049:
case 3086:
case 937:
case 1503:
case 2298:
case 1128:
case 2803:
case 2848:
case 1907:
case 1097:
case 533:
case 2421:
case 1876:
case 2773:
case 1885:
case 4089:
case 4046:
case 2712:
case 2585:
case 2550:
case 567:
case 3473:
case 3421:
case 3712:
case 1138:
case 3721:
case 1159:
case 3585:
case 925:
case 1030:
case 1113:
case 2925:
case 615:
case 2202:
case 2004:
case 1067:
case 1647:
case 2615:
case 1561:
case 2268:
case 2049:
case 3309:
case 3891:
case 2669:
case 3964:
case 3848:
case 2731:
case 2549:
case 919:
case 1849:
case 4045:
case 2783:
case 1942:
case 1875:
case 1641:
case 2867:
case 1804:
case 1061:
case 1474:
case 442:
case 2830:
case 3085:
case 1530:
case 2460:
case 1955:
case 684:
case 938:
case 3427:
case 328:
case 3926:
case 566:
case 3339:
case 3566:
case 2951:
case 3442:
case 2701:
case 2793:
case 488:
case 3833:
case 1688:
case 3763:
case 1289:
case 3854:
case 1246:
case 2401:
case 27:
case 329:
case 2329:
case 1617:
case 1990:
case 1000:
case 1571:
case 1108:
case 1726:
case 3222:
case 2019:
case 960:
case 2679:
case 226:
case 3780:
case 3524:
case 3217:
case 4015:
case 88:
case 1313:
case 3144:
case 2519:
case 635:
case 1372:
case 1577:
case 1622:
case 421:
case 1023:
case 1973:
case 1912:
case 1500:
case 3881:
case 2534:
case 3288:
case 865:
case 1834:
case 2470:
case 1338:
case 1764:
case 2957:
case 3689:
case 774:
case 3646:
case 2984:
case 823:
case 2949:
case 3644:
case 2986:
case 222:
case 3208:
case 119:
case 2315:
case 2487:
case 3064:
case 3262:
case 2904:
case 1836:
case 2094:
case 2292:
case 2863:
case 1542:
case 2025:
case 2787:
case 2975:
case 1563:
case 2842:
case 2369:
case 1466:
case 2754:
case 815:
case 933:
case 2718:
case 3035:
case 3146:
case 1555:
case 3471:
case 562:
case 244:
case 1188:
case 3400:
case 3976:
case 1795:
case 620:
case 77:
case 477:
case 2152:
case 3700:
case 968:
case 3316:
case 1495:
case 3777:
case 1608:
case 2781:
case 2210:
case 1244:
case 1117:
case 1825:
case 1662:
case 2036:
case 2145:
case 1063:
case 2179:
case 1209:
case 884:
case 1317:
case 2629:
case 3005:
case 1450:
case 2345:
case 969:
case 3614:
case 2919:
case 1977:
case 1750:
case 1785:
case 1573:
case 1141:
case 1198:
case 2965:
case 1900:
case 3761:
case 3658:
case 2934:
case 1806:
case 536:
case 3639:
case 2403:
case 2491:
case 2051:
case 3238:
case 3461:
case 241:
case 3259:
case 1884:
case 3831:
case 2748:
case 2791:
case 2584:
case 3116:
case 68:
case 2797:
case 2551:
case 1258:
case 3966:
case 3837:
case 3467:
case 835:
case 476:
case 517:
case 118:
case 2497:
case 446:
case 2006:
case 3389:
case 3346:
case 2827:
case 1923:
case 2115:
case 1147:
case 1672:
case 3199:
case 1214:
case 665:
case 1012:
case 727:
case 1971:
case 3505:
case 3430:
case 160:
case 1322:
case 2169:
case 623:
case 1229:
case 3115:
case 3890:
case 3827:
case 2199:
case 674:
case 3169:
case 1560:
case 1628:
case 1874:
case 482:
case 2430:
case 136:
case 2574:
case 449:
case 1031:
case 735:
case 1933:
case 3720:
case 1475:
case 1786:
case 1749:
case 3057:
case 3282:
case 2467:
case 1404:
case 2883:
case 1775:
case 1987:
case 1332:
case 622:
case 2767:
case 2346:
case 2389:
case 3006:
case 3352:
case 2639:
case 3506:
case 3491:
case 3403:
case 1981:
case 2259:
case 2461:
case 2238:
case 2116:
case 3748:
case 539:
case 2831:
case 1037:
case 3557:
case 3345:
case 2995:
case 2924:
case 1640:
case 2614:
case 2272:
case 2213:
case 3812:
case 3228:
case 966:
case 3873:
case 3379:
case 3821:
case 2856:
case 3781:
case 1302:
case 826:
case 3525:
case 1556:
case 3145:
case 1368:
case 3036:
case 3179:
case 1692:
case 1570:
case 1001:
case 1948:
case 1903:
case 137:
case 671:
case 4:
case 2535:
case 2400:
case 1465:
case 87:
case 3152:
case 4058:
case 2477:
case 2026:
case 1765:
case 519:
case 2700:
case 2777:
case 3418:
case 2771:
case 374:
case 2723:
case 2471:
case 1826:
case 2146:
case 265:
case 3718:
case 2526:
case 3855:
case 344:
case 1501:
case 2243:
case 1593:
case 2644:
case 1610:
case 3986:
case 1997:
case 1007:
case 2064:
case 932:
case 3733:
case 478:
case 3863:
case 3292:
case 15:
case 2609:
case 3094:
case 3369:
case 448:
case 3433:
case 99:
case 1056:
case 3975:
case 3536:
case 3787:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1743613202/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,];
var gg_b = "1743613202/";

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
