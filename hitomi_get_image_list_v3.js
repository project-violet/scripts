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
case 3483:
case 2790:
case 3623:
case 38:
case 2881:
case 3451:
case 3066:
case 2347:
case 536:
case 1304:
case 2874:
case 1363:
case 3636:
case 1974:
case 1858:
case 3479:
case 3586:
case 2726:
case 844:
case 1738:
case 2283:
case 1021:
case 3592:
case 1007:
case 2375:
case 2251:
case 739:
case 4079:
case 174:
case 1411:
case 3913:
case 116:
case 1288:
case 2180:
case 3818:
case 2905:
case 160:
case 3443:
case 3678:
case 1652:
case 1824:
case 3158:
case 1172:
case 2387:
case 736:
case 795:
case 3757:
case 3546:
case 1450:
case 1229:
case 3105:
case 3082:
case 178:
case 1118:
case 53:
case 3980:
case 3096:
case 4043:
case 4010:
case 1776:
case 2113:
case 3035:
case 940:
case 2782:
case 3522:
case 4032:
case 851:
case 580:
case 2285:
case 2796:
case 1091:
case 2808:
case 3759:
case 1541:
case 979:
case 732:
case 3060:
case 1908:
case 3630:
case 2903:
case 1803:
case 3234:
case 2354:
case 2389:
case 481:
case 3580:
case 217:
case 2720:
case 3625:
case 631:
case 1269:
case 810:
case 1955:
case 1365:
case 3839:
case 1312:
case 3432:
case 2057:
case 2192:
case 2434:
case 2186:
case 803:
case 2742:
case 1553:
case 3663:
case 1336:
case 2245:
case 780:
case 3026:
case 1299:
case 532:
case 2602:
case 2558:
case 1395:
case 555:
case 3604:
case 2115:
case 2162:
case 2349:
case 1894:
case 467:
case 2766:
case 2216:
case 3513:
case 3445:
case 2994:
case 2277:
case 3090:
case 330:
case 3992:
case 1770:
case 112:
case 914:
case 2505:
case 2400:
case 4077:
case 1631:
case 3692:
case 2318:
case 3686:
case 3077:
case 3426:
case 3016:
case 315:
case 150:
case 2125:
case 4033:
case 2226:
case 1187:
case 2783:
case 922:
case 3045:
case 2130:
case 89:
case 3353:
case 2233:
case 3536:
case 111:
case 3904:
case 2000:
case 1802:
case 3868:
case 1409:
case 295:
case 3646:
case 3993:
case 2514:
case 1175:
case 896:
case 731:
case 3706:
case 3257:
case 3898:
case 482:
case 1608:
case 2260:
case 2104:
case 3662:
case 2710:
case 2743:
case 1147:
case 3578:
case 128:
case 632:
case 1168:
case 1729:
case 1322:
case 843:
case 1276:
case 1748:
case 3032:
case 1767:
case 655:
case 173:
case 1217:
case 2914:
case 2296:
case 3525:
case 2785:
case 3420:
case 4035:
case 1814:
case 92:
case 255:
case 892:
case 3259:
case 3284:
case 1346:
case 2732:
case 3355:
case 2235:
case 4082:
case 3271:
case 3734:
case 3889:
case 3854:
case 3496:
case 1219:
case 2852:
case 1952:
case 1769:
case 2136:
case 2484:
case 2459:
case 1315:
case 1362:
case 4020:
case 3308:
case 717:
case 3435:
case 2471:
case 2195:
case 1727:
case 2006:
case 765:
case 1701:
case 3873:
case 3613:
case 2745:
case 3051:
case 457:
case 137:
case 63:
case 3083:
case 639:
case 3244:
case 190:
case 3079:
case 3700:
case 280:
case 3114:
case 1531:
case 2112:
case 887:
case 2716:
case 859:
case 3849:
case 2266:
case 3442:
case 926:
case 971:
case 3995:
case 1681:
case 3923:
case 2658:
case 1189:
case 1154:
case 2502:
case 517:
case 489:
case 3936:
case 2178:
case 3828:
case 48:
case 3504:
case 3121:
case 3473:
case 1971:
case 3107:
case 2871:
case 3835:
case 1557:
case 621:
case 676:
case 363:
case 306:
case 2884:
case 3708:
case 1212:
case 1265:
case 614:
case 2452:
case 1715:
case 1762:
case 3037:
case 3454:
case 493:
case 1327:
case 446:
case 2385:
case 1606:
case 3517:
case 722:
case 3755:
case 3919:
case 1278:
case 1746:
case 2332:
case 1024:
case 1414:
case 358:
case 2289:
case 3820:
case 2254:
case 44:
case 449:
case 2316:
case 320:
case 931:
case 2377:
case 1821:
case 2844:
case 1807:
case 1135:
case 3449:
case 2561:
case 1236:
case 2228:
case 847:
case 2074:
case 2345:
case 240:
case 1:
case 679:
case 177:
case 67:
case 1120:
case 4049:
case 3970:
case 1399:
case 3697:
case 1792:
case 4028:
case 30:
case 1223:
case 3538:
case 1295:
case 309:
case 3300:
case 3866:
case 2611:
case 2249:
case 1809:
case 3468:
case 2275:
case 2909:
case 3774:
case 2351:
case 729:
case 1094:
case 4075:
case 2961:
case 2507:
case 27:
case 279:
case 2379:
case 640:
case 464:
case 1600:
case 3570:
case 713:
case 2431:
case 1204:
case 3833:
case 1160:
case 526:
case 1713:
case 1263:
case 2656:
case 1397:
case 3699:
case 2176:
case 3938:
case 3039:
case 2343:
case 2857:
case 1190:
case 1329:
case 3627:
case 883:
case 52:
case 3601:
case 1225:
case 1293:
case 1722:
case 453:
case 2055:
case 133:
case 341:
case 3741:
case 1584:
case 1559:
case 468:
case 513:
case 1230:
case 3498:
case 214:
case 1126:
case 2138:
case 726:
case 401:
case 1780:
case 398:
case 875:
case 1064:
case 1891:
case 3519:
case 1133:
case 2737:
case 221:
case 3860:
case 2834:
case 3087:
case 3617:
case 3832:
case 626:
case 671:
case 3156:
case 1215:
case 1765:
case 2455:
case 1712:
case 3885:
case 2691:
case 342:
case 3901:
case 441:
case 3927:
case 2382:
case 3548:
case 3098:
case 93:
case 1116:
case 3567:
case 939:
case 3752:
case 2335:
case 2408:
case 3255:
case 3371:
case 2754:
case 540:
case 222:
case 4039:
case 2366:
case 936:
case 1185:
case 1900:
case 494:
case 3638:
case 1370:
case 3999:
case 2342:
case 2169:
case 1736:
case 2609:
case 62:
case 629:
case 3344:
case 1723:
case 2127:
case 1286:
case 1292:
case 2101:
case 2749:
case 454:
case 1338:
case 1405:
case 2272:
case 134:
case 409:
case 932:
case 3150:
case 40:
case 3274:
case 3731:
case 3049:
case 3253:
case 3281:
case 3879:
case 2218:
case 2390:
case 2768:
case 200:
case 3472:
case 1458:
case 2129:
case 3988:
case 1143:
case 1110:
case 521:
case 2453:
case 4018:
case 718:
case 514:
case 1240:
case 2621:
case 1644:
case 2148:
case 349:
case 2607:
case 980:
case 3111:
case 2360:
case 458:
case 138:
case 622:
case 3073:
case 579:
case 2806:
case 1725:
case 1793:
case 3241:
case 1850:
case 346:
case 393:
case 1730:
case 1151:
case 3948:
case 406:
case 2787:
case 3527:
case 3929:
case 825:
case 714:
case 1014:
case 1280:
case 3357:
case 1684:
case 2188:
case 2237:
case 271:
case 2441:
case 3843:
case 2042:
case 958:
case 3726:
case 3044:
case 1497:
case 1918:
case 3279:
case 581:
case 3733:
case 3347:
case 1649:
case 1761:
case 767:
case 3368:
case 824:
case 2483:
case 199:
case 2623:
case 697:
case 289:
case 715:
case 906:
case 2872:
case 811:
case 963:
case 1070:
case 2479:
case 630:
case 3958:
case 1972:
case 2124:
case 1488:
case 1880:
case 2082:
case 152:
case 954:
case 2096:
case 2980:
case 432:
case 286:
case 1937:
case 2665:
case 196:
case 90:
case 2612:
case 3140:
case 3113:
case 781:
case 2158:
case 2922:
case 1689:
case 1822:
case 2020:
case 4006:
case 2443:
case 2410:
case 1174:
case 3924:
case 1250:
case 515:
case 143:
case 1467:
case 3503:
case 873:
case 1673:
case 3855:
case 1537:
case 2946:
case 1846:
case 365:
case 282:
case 317:
case 2485:
case 2693:
case 2625:
case 3192:
case 3434:
case 3057:
case 2784:
case 2759:
case 1469:
case 1815:
case 1862:
case 3782:
case 3373:
case 3796:
case 3285:
case 108:
case 2234:
case 1687:
case 3354:
case 1017:
case 1892:
case 2090:
case 1886:
case 837:
case 3766:
case 2513:
case 998:
case 3216:
case 3146:
case 1675:
case 297:
case 3400:
case 68:
case 187:
case 2744:
case 159:
case 2026:
case 1707:
case 15:
case 3328:
case 2416:
case 902:
case 4000:
case 1108:
case 3115:
case 3349:
case 2033:
case 3162:
case 1572:
case 2045:
case 1863:
case 757:
case 3130:
case 2374:
case 2963:
case 1549:
case 3372:
case 3000:
case 1968:
case 2868:
case 3902:
case 33:
case 2353:
case 2536:
case 3233:
case 2016:
case 3694:
case 144:
case 3318:
case 2692:
case 2077:
case 1305:
case 901:
case 2875:
case 1975:
case 267:
case 3125:
case 1209:
case 789:
case 3831:
case 215:
case 2085:
case 2102:
case 557:
case 3664:
case 1554:
case 1589:
case 3104:
case 2615:
case 2578:
case 2662:
case 3710:
case 81:
case 2341:
case 3163:
case 819:
case 1987:
case 3034:
case 3603:
case 162:
case 2993:
case 4057:
case 3514:
case 1893:
case 1825:
case 2565:
case 2512:
case 3337:
case 2257:
case 2898:
case 1417:
case 1027:
case 1001:
case 2706:
case 94:
case 1878:
case 3459:
case 3136:
case 1303:
case 597:
case 2889:
case 1954:
case 1989:
case 2622:
case 2482:
case 530:
case 1973:
case 3195:
case 1587:
case 3471:
case 3123:
case 3006:
case 2873:
case 2435:
case 2912:
case 2965:
case 166:
case 1419:
case 2043:
case 2010:
case 1865:
case 2259:
case 2284:
case 2680:
case 3914:
case 3785:
case 3296:
case 2593:
case 1029:
case 3282:
case 110:
case 1048:
case 2734:
case 2271:
case 332:
case 4059:
case 1067:
case 103:
case 667:
case 2923:
case 2995:
case 2563:
case 3266:
case 2442:
case 730:
case 1152:
case 3178:
case 2504:
case 1836:
case 993:
case 3502:
case 946:
case 2083:
case 1221:
case 2466:
case 2051:
case 1756:
case 3242:
case 1088:
case 812:
case 1394:
case 3165:
case 2079:
case 3605:
case 1618:
case 1470:
case 3739:
case 3273:
case 2576:
case 3385:
case 3170:
case 372:
case 753:
case 1920:
case 3254:
case 1022:
case 1412:
case 2755:
case 3650:
case 3041:
case 3332:
case 2667:
case 2835:
case 742:
case 1144:
case 2121:
case 2473:
case 426:
case 2648:
case 1703:
case 698:
case 2107:
case 471:
case 2882:
case 1214:
case 1996:
case 2896:
case 805:
case 3884:
case 2708:
case 989:
case 1478:
case 1643:
case 2037:
case 1610:
case 340:
case 2072:
case 2697:
case 42:
case 1356:
case 3345:
case 1794:
case 3053:
case 20:
case 2538:
case 2300:
case 209:
case 413:
case 3509:
case 568:
case 1184:
case 1159:
case 501:
case 2688:
case 3316:
case 2449:
case 3561:
case 1423:
case 1495:
case 3247:
case 2833:
case 74:
case 1705:
case 834:
case 2570:
case 318:
case 1838:
case 2826:
case 3176:
case 1926:
case 3117:
case 1645:
case 3656:
case 2774:
case 2231:
case 3351:
case 1404:
case 654:
case 609:
case 3772:
case 2468:
case 107:
case 60:
case 2890:
case 4031:
case 379:
case 3379:
case 1677:
case 1990:
case 3961:
case 1542:
case 1157:
case 3138:
case 3287:
case 1876:
case 1817:
case 1632:
case 314:
case 2498:
case 997:
case 1350:
case 606:
case 2917:
case 1960:
case 376:
case 930:
case 321:
case 1015:
case 2860:
case 793:
case 1493:
case 2306:
case 2487:
case 2627:
case 746:
case 3343:
case 2039:
case 2161:
case 1535:
case 1430:
case 3298:
case 125:
case 2669:
case 1724:
case 2741:
case 241:
case 1046:
case 1582:
case 646:
case 2567:
case 2359:
case 2901:
case 50:
case 3382:
case 509:
case 3773:
case 1801:
case 2548:
case 2371:
case 3789:
case 2529:
case 1093:
case 322:
case 1462:
case 2969:
case 2255:
case 3408:
case 1030:
case 2156:
case 2439:
case 706:
case 915:
case 3320:
case 421:
case 1203:
case 2885:
case 520:
case 1985:
case 1714:
case 763:
case 242:
case 201:
case 1660:
case 2344:
case 70:
case 3031:
case 2588:
case 47:
case 3728:
case 1916:
case 1294:
case 1977:
case 3127:
case 1583:
case 3101:
case 2877:
case 2597:
case 649:
case 2068:
case 8:
case 506:
case 1633:
case 2047:
case 877:
case 1063:
case 1945:
case 563:
case 3511:
case 2638:
case 1134:
case 1899:
case 1888:
case 2988:
case 794:
case 1702:
case 3218:
case 1979:
case 2472:
case 670:
case 1983:
case 1577:
case 249:
case 3148:
case 1309:
case 3607:
case 1951:
case 1642:
case 3453:
case 313:
case 4081:
case 1036:
case 2028:
case 541:
case 2731:
case 2997:
case 502:
case 4053:
case 3775:
case 2418:
case 3272:
case 1258:
case 2281:
case 329:
case 32:
case 1106:
case 2049:
case 3333:
case 2253:
case 3911:
case 440:
case 1413:
case 1545:
case 1440:
case 1848:
case 2948:
case 1867:
case 594:
case 293:
case 798:
case 2967:
case 1943:
case 2357:
case 1012:
case 1065:
case 2843:
case 2810:
case 1682:
case 833:
case 1829:
case 1391:
case 741:
case 2073:
case 702:
case 2111:
case 472:
case 3052:
case 1224:
case 2619:
case 3950:
case 653:
case 175:
case 2054:
case 1480:
case 3197:
case 1585:
case 3358:
case 1372:
case 3099:
case 716:
case 905:
case 889:
case 1751:
case 3863:
case 1130:
case 523:
case 459:
case 3947:
case 3804:
case 1902:
case 13:
case 2409:
case 139:
case 1779:
case 2802:
case 3305:
case 519:
case 51:
case 1694:
case 2198:
case 2340:
case 1831:
case 3975:
case 391:
case 1710:
case 1743:
case 2552:
case 4076:
case 2168:
case 560:
case 2729:
case 1664:
case 3291:
case 1603:
case 2322:
case 2276:
case 2748:
case 778:
case 2217:
case 3324:
case 1457:
case 3069:
case 195:
case 71:
case 3893:
case 362:
case 1514:
case 2175:
case 348:
case 3027:
case 3476:
case 3998:
case 3639:
case 3989:
case 3954:
case 443:
case 3303:
case 1220:
case 512:
case 2952:
case 2769:
case 1459:
case 2128:
case 2219:
case 1852:
case 685:
case 2315:
case 2149:
case 1006:
case 2701:
case 1123:
case 1471:
case 2727:
case 3587:
case 1195:
case 310:
case 1282:
case 2814:
case 1296:
case 1785:
case 3865:
case 3812:
case 3419:
case 303:
case 1235:
case 3598:
case 2346:
case 452:
case 1732:
case 628:
case 132:
case 1266:
case 3949:
case 2653:
case 712:
case 2681:
case 1444:
case 2421:
case 2407:
case 3097:
case 2270:
case 1658:
case 3568:
case 2154:
case 3836:
case 3928:
case 2674:
case 1178:
case 3152:
case 611:
case 3756:
case 830:
case 3221:
case 237:
case 2392:
case 180:
case 1605:
case 290:
case 624:
case 1112:
case 3088:
case 2531:
case 4088:
case 1375:
case 1726:
case 2738:
case 711:
case 2021:
case 274:
case 2411:
case 3813:
case 1733:
case 867:
case 1279:
case 815:
case 2805:
case 1180:
case 3497:
case 724:
case 3918:
case 1881:
case 3302:
case 399:
case 3211:
case 2304:
case 2953:
case 3761:
case 3649:
case 3141:
case 2363:
case 3488:
case 46:
case 3628:
case 469:
case 3972:
case 1958:
case 2297:
case 3709:
case 2555:
case 2450:
case 1398:
case 1243:
case 511:
case 3937:
case 1084:
case 1059:
case 352:
case 278:
case 2118:
case 3791:
case 773:
case 4067:
case 3880:
case 2229:
case 403:
case 2248:
case 1071:
case 1406:
case 2325:
case 2393:
case 3539:
case 9:
case 1140:
case 524:
case 2717:
case 4029:
case 223:
case 977:
case 728:
case 2508:
case 3250:
case 3019:
case 2652:
case 550:
case 881:
case 2172:
case 3654:
case 1387:
case 1564:
case 1503:
case 131:
case 343:
case 1720:
case 117:
case 392:
case 356:
case 3537:
case 3939:
case 3698:
case 1434:
case 2227:
case 2201:
case 4069:
case 1796:
case 2091:
case 2864:
case 1964:
case 1782:
case 1373:
case 3862:
case 2908:
case 2541:
case 3469:
case 1735:
case 2803:
case 1389:
case 1354:
case 3076:
case 3401:
case 491:
case 678:
case 1903:
case 537:
case 1216:
case 2456:
case 2139:
case 2061:
case 1766:
case 3886:
case 1277:
case 3892:
case 1505:
case 387:
case 444:
case 3518:
case 212:
case 2770:
case 2009:
case 3675:
case 3155:
case 1245:
case 304:
case 2553:
case 3256:
case 3707:
case 2299:
case 35:
case 3721:
case 359:
case 3572:
case 1558:
case 2323:
case 2395:
case 1162:
case 3647:
case 911:
case 1382:
case 425:
case 863:
case 3801:
case 1773:
case 1396:
case 3827:
case 2657:
case 1239:
case 2116:
case 2778:
case 924:
case 638:
case 122:
case 1789:
case 806:
case 1320:
case 1199:
case 4015:
case 2506:
case 3203:
case 1834:
case 950:
case 488:
case 3030:
case 2319:
case 2765:
case 1550:
case 2262:
case 2215:
case 3264:
case 1342:
case 1169:
case 1031:
case 820:
case 227:
case 2292:
case 3977:
case 2723:
case 1127:
case 2286:
case 777:
case 634:
case 3551:
case 1749:
case 3633:
case 1366:
case 3004:
case 2900:
case 2002:
case 484:
case 2185:
case 1800:
case 3899:
case 3134:
case 809:
case 2856:
case 1511:
case 1956:
case 3063:
case 1768:
case 3979:
case 1747:
case 1474:
case 2704:
case 2213:
case 3516:
case 1453:
case 1607:
case 2644:
case 1148:
case 2338:
case 3258:
case 2500:
case 3897:
case 1775:
case 533:
case 234:
case 3413:
case 3545:
case 1556:
case 3666:
case 2811:
case 12:
case 129:
case 4080:
case 383:
case 2151:
case 3635:
case 2671:
case 2014:
case 841:
case 2280:
case 2179:
case 3012:
case 3065:
case 2424:
case 1188:
case 171:
case 1237:
case 1441:
case 2534:
case 3391:
case 733:
case 3620:
case 3585:
case 1197:
case 3480:
case 2376:
case 2222:
case 375:
case 937:
case 1052:
case 3078:
case 4078:
case 2606:
case 475:
case 633:
case 1739:
case 960:
case 2166:
case 842:
case 2746:
case 1041:
case 3560:
case 1650:
case 3022:
case 1591:
case 2414:
case 527:
case 974:
case 3920:
case 3703:
case 2971:
case 2369:
case 1452:
case 3478:
case 3610:
case 3643:
case 2265:
case 3982:
case 2327:
case 3214:
case 3080:
case 3996:
case 2301:
case 1345:
case 505:
case 2236:
case 3533:
case 277:
case 2120:
case 923:
case 2399:
case 3870:
case 2:
case 2295:
case 3526:
case 2792:
case 3794:
case 978:
case 91:
case 3159:
case 2196:
case 1509:
case 2005:
case 3679:
case 3590:
case 3423:
case 2944:
case 3683:
case 2821:
case 3651:
case 3942:
case 1561:
case 1718:
case 2204:
case 3311:
case 1431:
case 384:
case 447:
case 3566:
case 2713:
case 3645:
case 2402:
case 1275:
case 3758:
case 1772:
case 1383:
case 3404:
case 1351:
case 2388:
case 3463:
case 2861:
case 179:
case 2544:
case 3086:
case 3990:
case 1379:
case 677:
case 2230:
case 114:
case 912:
case 3350:
case 3817:
case 3876:
case 2003:
case 2126:
case 1138:
case 2634:
case 388:
case 3493:
case 3425:
case 2780:
case 3685:
case 2133:
case 3062:
case 1737:
case 3430:
case 3535:
case 2190:
case 893:
case 2329:
case 3582:
case 2348:
case 2225:
case 3596:
case 2293:
case 2559:
case 2584:
case 2367:
case 3046:
case 325:
case 534:
case 1055:
case 233:
case 412:
case 4009:
case 1016:
case 2711:
case 3198:
case 1686:
case 2305:
case 167:
case 4061:
case 350:
case 3340:
case 3931:
case 799:
case 3056:
case 535:
case 2863:
case 324:
case 3238:
case 3187:
case 1490:
case 2099:
case 1868:
case 1353:
case 2947:
case 2528:
case 3788:
case 2893:
case 1993:
case 248:
case 1646:
case 385:
case 2069:
case 1565:
case 1512:
case 2998:
case 2417:
case 2639:
case 59:
case 599:
case 2476:
case 3168:
case 1102:
case 2291:
case 291:
case 1662:
case 3608:
case 3767:
case 1032:
case 2830:
case 831:
case 610:
case 3276:
case 2637:
case 1043:
case 2865:
case 1259:
case 2812:
case 1912:
case 2419:
case 423:
case 1680:
case 1420:
case 55:
case 2048:
case 1271:
case 761:
case 559:
case 504:
case 1355:
case 3769:
case 3641:
case 251:
case 419:
case 3050:
case 2878:
case 2954:
case 2989:
case 1622:
case 587:
case 1482:
case 2303:
case 648:
case 1873:
case 662:
case 2364:
case 3727:
case 1435:
case 792:
case 3315:
case 3362:
case 1083:
case 1244:
case 975:
case 337:
case 3799:
case 1466:
case 1613:
case 1640:
case 460:
case 2394:
case 2088:
case 4007:
case 3392:
case 704:
case 1114:
case 1079:
case 390:
case 1700:
case 3421:
case 2895:
case 26:
case 1563:
case 3653:
case 3011:
case 1849:
case 556:
case 1828:
case 1504:
case 1936:
case 2928:
case 2547:
case 3270:
case 983:
case 3154:
case 2211:
case 3953:
case 29:
case 189:
case 687:
case 3981:
case 4011:
case 1872:
case 548:
case 2709:
case 3297:
case 3858:
case 744:
case 562:
case 2070:
case 3363:
case 83:
case 3974:
case 2628:
case 1636:
case 3411:
case 374:
case 3007:
case 3738:
case 1818:
case 157:
case 65:
case 437:
case 591:
case 316:
case 1020:
case 1158:
case 1922:
case 2689:
case 2250:
case 3824:
case 2019:
case 3330:
case 1443:
case 1410:
case 2174:
case 3941:
case 1562:
case 1678:
case 1757:
case 2467:
case 544:
case 4050:
case 2448:
case 2673:
case 31:
case 2791:
case 3118:
case 378:
case 1096:
case 3229:
case 2880:
case 1837:
case 1665:
case 296:
case 3555:
case 186:
case 2937:
case 3267:
case 323:
case 1035:
case 791:
case 3248:
case 608:
case 3393:
case 3325:
case 635:
case 3908:
case 2862:
case 3541:
case 1759:
case 1915:
case 208:
case 3864:
case 1522:
case 1771:
case 1234:
case 3803:
case 2427:
case 2687:
case 2401:
case 766:
case 428:
case 1352:
case 907:
case 696:
case 2017:
case 1630:
case 2846:
case 643:
case 1580:
case 1485:
case 1693:
case 182:
case 3227:
case 3201:
case 2314:
case 485:
case 1432:
case 2698:
case 1103:
case 2707:
case 3299:
case 25:
case 1744:
case 2721:
case 1026:
case 2038:
case 1416:
case 204:
case 1663:
case 3336:
case 3574:
case 2647:
case 1033:
case 566:
case 1604:
case 2668:
case 510:
case 1164:
case 2499:
case 1992:
case 2892:
case 130:
case 1090:
case 450:
case 3061:
case 769:
case 551:
case 2155:
case 699:
case 287:
case 2675:
case 197:
case 3009:
case 2932:
case 1156:
case 2030:
case 3145:
case 1676:
case 1087:
case 3934:
case 445:
case 2203:
case 3506:
case 944:
case 168:
case 2714:
case 142:
case 2264:
case 1208:
case 2660:
case 3712:
case 101:
case 2446:
case 4003:
case 872:
case 1567:
case 1359:
case 1098:
case 675:
case 1548:
case 3177:
case 1901:
case 2025:
case 3464:
case 305:
case 1255:
case 2462:
case 1752:
case 2510:
case 3778:
case 3900:
case 1068:
case 1597:
case 247:
case 2633:
case 2945:
case 164:
case 962:
case 3370:
case 2626:
case 2134:
case 2899:
case 2321:
case 2579:
case 4094:
case 2551:
case 3292:
case 1877:
case 2690:
case 3286:
case 991:
case 2583:
case 3723:
case 1731:
case 1274:
case 334:
case 2258:
case 1997:
case 1670:
case 966:
case 1599:
case 2106:
case 2095:
case 1281:
case 2440:
case 707:
case 1049:
case 3110:
case 3143:
case 2979:
case 588:
case 3458:
case 1472:
case 1879:
case 647:
case 2309:
case 1883:
case 149:
case 4005:
case 2516:
case 1851:
case 3240:
case 879:
case 87:
case 2951:
case 814:
case 725:
case 2391:
case 338:
case 2532:
case 1111:
case 275:
case 1437:
case 507:
case 3793:
case 2480:
case 2585:
case 876:
case 1089:
case 3222:
case 1948:
case 3183:
case 1527:
case 2848:
case 1501:
case 584:
case 2867:
case 2635:
case 193:
case 3730:
case 96:
case 2012:
case 2065:
case 1810:
case 3659:
case 3684:
case 1357:
case 2696:
case 3280:
case 1929:
case 3179:
case 2935:
case 163:
case 1667:
case 4014:
case 3557:
case 3142:
case 2703:
case 1107:
case 1473:
case 1121:
case 1648:
case 3971:
case 688:
case 1896:
case 1454:
case 1629:
case 1882:
case 2080:
case 2996:
case 2478:
case 3715:
case 3984:
case 3959:
case 2643:
case 106:
case 99:
case 3265:
case 625:
case 3166:
case 3606:
case 1576:
case 2022:
case 158:
case 3414:
case 1252:
case 3746:
case 2412:
case 1755:
case 2560:
case 3196:
case 1018:
case 3182:
case 120:
case 2679:
case 2436:
case 2184:
case 2159:
case 684:
case 1688:
case 2651:
case 1842:
case 2423:
case 2171:
case 2495:
case 3120:
case 1697:
case 1970:
case 2870:
case 3236:
case 2356:
case 2966:
case 2794:
case 154:
case 952:
case 1866:
case 2526:
case 3786:
case 3295:
case 3223:
case 434:
case 1538:
case 1300:
case 109:
case 607:
case 10:
case 996:
case 2404:
case 800:
case 1774:
case 1447:
case 1231:
case 3402:
case 207:
case 3809:
case 1890:
case 1753:
case 2157:
case 427:
case 908:
case 3861:
case 2616:
case 1833:
case 3204:
case 3160:
case 2311:
case 2202:
case 1938:
case 2838:
case 1826:
case 1699:
case 3397:
case 284:
case 583:
case 82:
case 3713:
case 2645:
case 1601:
case 775:
case 3190:
case 1487:
case 3571:
case 3329:
case 1627:
case 2535:
case 3957:
case 1039:
case 3559:
case 2724:
case 1741:
case 959:
case 95:
case 333:
case 3722:
case 3348:
case 826:
case 871:
case 2596:
case 1109:
case 2876:
case 3003:
case 3634:
case 3230:
case 2632:
case 2062:
case 3133:
case 1860:
case 2960:
case 3891:
case 288:
case 783:
case 2425:
case 198:
case 1306:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1753171202/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,];
var gg_b = "1753171202/";

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
