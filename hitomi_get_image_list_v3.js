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
case 4088:
case 2196:
case 2120:
case 1464:
case 1086:
case 3180:
case 2075:
case 3137:
case 375:
case 363:
case 1730:
case 2118:
case 718:
case 1336:
case 2925:
case 3253:
case 2660:
case 792:
case 1095:
case 1866:
case 1489:
case 3918:
case 1176:
case 2013:
case 668:
case 880:
case 3070:
case 2185:
case 2856:
case 3377:
case 1112:
case 3920:
case 3847:
case 4015:
case 3541:
case 3665:
case 923:
case 3470:
case 4087:
case 4030:
case 3138:
case 1495:
case 261:
case 2117:
case 3151:
case 1681:
case 1803:
case 747:
case 127:
case 2793:
case 2951:
case 3917:
case 535:
case 3597:
case 1486:
case 3744:
case 1869:
case 2536:
case 852:
case 1179:
case 1715:
case 2323:
case 2782:
case 68:
case 2859:
case 2054:
case 3999:
case 1961:
case 3378:
case 3304:
case 3602:
case 3694:
case 2938:
case 2643:
case 1457:
case 854:
case 3692:
case 2163:
case 2343:
case 573:
case 3810:
case 2052:
case 484:
case 3724:
case 3604:
case 2873:
case 3302:
case 21:
case 781:
case 2888:
case 3507:
case 3828:
case 2703:
case 1560:
case 565:
case 348:
case 3742:
case 242:
case 1893:
case 643:
case 1934:
case 1225:
case 3276:
case 2769:
case 1058:
case 1639:
case 978:
case 3555:
case 1882:
case 1031:
case 2109:
case 231:
case 1405:
case 3212:
case 413:
case 3365:
case 151:
case 794:
case 1114:
case 603:
case 2581:
case 459:
case 3940:
case 3574:
case 638:
case 2468:
case 1005:
case 3521:
case 317:
case 889:
case 3279:
case 2232:
case 2452:
case 2360:
case 297:
case 333:
case 815:
case 1636:
case 1057:
case 1462:
case 2106:
case 1756:
case 2945:
case 3835:
case 2067:
case 187:
case 2657:
case 802:
case 1127:
case 760:
case 1203:
case 546:
case 1564:
case 134:
case 3646:
case 116:
case 1423:
case 3796:
case 897:
case 3390:
case 1284:
case 1845:
case 170:
case 2780:
case 3814:
case 3019:
case 162:
case 2737:
case 2554:
case 1375:
case 1135:
case 440:
case 3472:
case 4032:
case 676:
case 2259:
case 2395:
case 1987:
case 3416:
case 3785:
case 3291:
case 610:
case 2605:
case 422:
case 3853:
case 831:
case 3570:
case 3944:
case 2513:
case 3072:
case 2751:
case 2834:
case 3098:
case 400:
case 1915:
case 3649:
case 1761:
case 936:
case 3016:
case 2631:
case 2389:
case 2738:
case 1110:
case 3497:
case 1652:
case 2122:
case 506:
case 1586:
case 3182:
case 1973:
case 2436:
case 842:
case 2144:
case 1988:
case 3419:
case 1732:
case 1557:
case 844:
case 37:
case 326:
case 829:
case 1851:
case 2287:
case 2230:
case 2142:
case 2450:
case 2567:
case 358:
case 1352:
case 1460:
case 2124:
case 252:
case 1838:
case 2331:
case 2689:
case 653:
case 101:
case 3235:
case 3924:
case 2984:
case 1368:
case 3971:
case 1191:
case 94:
case 3349:
case 3942:
case 3074:
case 3008:
case 277:
case 3055:
case 2966:
case 2305:
case 2695:
case 3201:
case 619:
case 721:
case 511:
case 3408:
case 2568:
case 2481:
case 449:
case 4034:
case 2745:
case 424:
case 280:
case 1880:
case 1837:
case 1531:
case 90:
case 132:
case 3812:
case 3300:
case 53:
case 1367:
case 774:
case 1147:
case 769:
case 1562:
case 3346:
case 1060:
case 3007:
case 685:
case 3311:
case 1778:
case 1322:
case 1624:
case 1704:
case 3133:
case 255:
case 496:
case 2418:
case 1792:
case 1929:
case 2200:
case 1344:
case 156:
case 3437:
case 989:
case 3480:
case 3257:
case 2211:
case 4077:
case 2420:
case 2496:
case 1808:
case 1874:
case 2246:
case 1821:
case 3051:
case 2328:
case 915:
case 650:
case 2691:
case 468:
case 3843:
case 2648:
case 2933:
case 2741:
case 2310:
case 1535:
case 2716:
case 3659:
case 1990:
case 527:
case 2417:
case 4083:
case 3258:
case 1195:
case 2113:
case 394:
case 1501:
case 3025:
case 283:
case 2249:
case 4092:
case 3330:
case 2327:
case 708:
case 878:
case 2018:
case 2970:
case 236:
case 48:
case 1479:
case 667:
case 135:
case 85:
case 3582:
case 733:
case 2719:
case 3656:
case 2175:
case 2522:
case 2006:
case 165:
case 763:
case 2571:
case 318:
case 2524:
case 1453:
case 2167:
case 684:
case 2347:
case 24:
case 1233:
case 266:
case 3687:
case 3630:
case 805:
case 2627:
case 3264:
case 3503:
case 952:
case 1105:
case 1946:
case 307:
case 1:
case 1591:
case 3569:
case 1911:
case 1765:
case 392:
case 3045:
case 1900:
case 2229:
case 1819:
case 613:
case 2878:
case 2610:
case 2348:
case 3952:
case 403:
case 2391:
case 438:
case 1414:
case 551:
case 1270:
case 3295:
case 2708:
case 2601:
case 3445:
case 2721:
case 980:
case 1053:
case 1644:
case 1162:
case 2063:
case 823:
case 1841:
case 2152:
case 2290:
case 3968:
case 977:
case 223:
case 1207:
case 562:
case 2044:
case 2849:
case 2972:
case 3939:
case 245:
case 2998:
case 16:
case 3332:
case 758:
case 2518:
case 3537:
case 3580:
case 534:
case 2022:
case 726:
case 3831:
case 3082:
case 77:
case 1663:
case 587:
case 1427:
case 2596:
case 904:
case 3361:
case 1512:
case 1729:
case 1992:
case 42:
case 1028:
case 1001:
case 3525:
case 3862:
case 410:
case 4026:
case 1983:
case 1435:
case 1410:
case 898:
case 1221:
case 3936:
case 2811:
case 3857:
case 944:
case 2517:
case 2800:
case 188:
case 1401:
case 866:
case 1396:
case 1726:
case 3493:
case 3775:
case 330:
case 3805:
case 1318:
case 84:
case 106:
case 2471:
case 2955:
case 1340:
case 3223:
case 931:
case 1711:
case 3107:
case 1553:
case 1618:
case 25:
case 2150:
case 2292:
case 1965:
case 3767:
case 2563:
case 1047:
case 3950:
case 453:
case 1216:
case 2890:
case 883:
case 3886:
case 2509:
case 91:
case 1298:
case 920:
case 193:
case 1272:
case 1091:
case 3121:
case 357:
case 3174:
case 902:
case 1309:
case 1514:
case 111:
case 1048:
case 2277:
case 4011:
case 1143:
case 3752:
case 3466:
case 1447:
case 3003:
case 13:
case 855:
case 3334:
case 671:
case 2353:
case 579:
case 2042:
case 2974:
case 2908:
case 2190:
case 3479:
case 335:
case 1037:
case 1080:
case 1656:
case 813:
case 2126:
case 1736:
case 2995:
case 3855:
case 1913:
case 3195:
case 3076:
case 751:
case 2588:
case 2461:
case 1025:
case 3528:
case 605:
case 2268:
case 3777:
case 1231:
case 884:
case 2986:
case 1451:
case 1954:
case 645:
case 1425:
case 2061:
case 623:
case 3476:
case 3189:
case 1038:
case 1373:
case 2129:
case 1659:
case 968:
case 3412:
case 415:
case 1205:
case 3642:
case 859:
case 356:
case 1437:
case 2393:
case 1257:
case 575:
case 2723:
case 3808:
case 2881:
case 2603:
case 489:
case 3079:
case 3874:
case 1315:
case 2587:
case 3821:
case 181:
case 3624:
case 3322:
case 3929:
case 328:
case 533:
case 2743:
case 2931:
case 3794:
case 477:
case 3841:
case 2275:
case 2556:
case 3702:
case 2682:
case 3371:
case 1968:
case 2034:
case 3872:
case 3949:
case 850:
case 1615:
case 3342:
case 2958:
case 480:
case 3898:
case 3414:
case 2369:
case 2213:
case 4050:
case 3158:
case 1823:
case 1445:
case 1688:
case 2962:
case 271:
case 586:
case 1673:
case 903:
case 1359:
case 147:
case 1952:
case 727:
case 3765:
case 192:
case 1045:
case 3900:
case 1967:
case 65:
case 3014:
case 2836:
case 107:
case 3946:
case 452:
case 1569:
case 3:
case 3591:
case 2957:
case 2366:
case 2905:
case 2146:
case 1264:
case 1503:
case 373:
case 2111:
case 2100:
case 1750:
case 3453:
case 4081:
case 209:
case 2434:
case 2087:
case 1805:
case 2030:
case 3318:
case 3579:
case 3027:
case 461:
case 1482:
case 3640:
case 3977:
case 2415:
case 3396:
case 3790:
case 1493:
case 683:
case 3726:
case 1775:
case 2786:
case 1243:
case 130:
case 2337:
case 3035:
case 388:
case 282:
case 2561:
case 636:
case 2488:
case 2867:
case 121:
case 3410:
case 3221:
case 444:
case 2795:
case 1936:
case 3208:
case 3274:
case 2473:
case 2281:
case 1857:
case 267:
case 3028:
case 655:
case 595:
case 3317:
case 910:
case 3001:
case 1525:
case 4075:
case 2923:
case 3435:
case 92:
case 3904:
case 976:
case 3978:
case 3399:
case 2073:
case 3512:
case 1116:
case 404:
case 2789:
case 3010:
case 1537:
case 346:
case 1831:
case 824:
case 3427:
case 3663:
case 2250:
case 2868:
case 2430:
case 2487:
case 4013:
case 2764:
case 1332:
case 2015:
case 1858:
case 3123:
case 1003:
case 1334:
case 985:
case 3297:
case 2762:
case 822:
case 3363:
case 291:
case 3143:
case 1752:
case 1084:
case 1889:
case 3514:
case 497:
case 3994:
case 3833:
case 1768:
case 3902:
case 1661:
case 3699:
case 402:
case 3617:
case 2651:
case 157:
case 1174:
case 2758:
case 1108:
case 1155:
case 2960:
case 237:
case 612:
case 4052:
case 1950:
case 2345:
case 666:
case 41:
case 2165:
case 442:
case 2875:
case 1886:
case 1469:
case 3491:
case 3700:
case 3306:
case 160:
case 2056:
case 2680:
case 3965:
case 3696:
case 1767:
case 3047:
case 716:
case 1403:
case 526:
case 3746:
case 558:
case 1484:
case 1066:
case 762:
case 3553:
case 800:
case 213:
case 770:
case 2534:
case 1722:
case 1602:
case 1519:
case 1304:
case 1392:
case 1848:
case 843:
case 825:
case 1383:
case 2132:
case 2240:
case 3715:
case 2490:
case 2701:
case 3339:
case 2979:
case 405:
case 2842:
case 2341:
case 2161:
case 3884:
case 3089:
case 3245:
case 2871:
case 2316:
case 2824:
case 2735:
case 4044:
case 1665:
case 1541:
case 390:
case 2429:
case 3866:
case 1598:
case 4022:
case 3489:
case 1572:
case 2655:
case 1125:
case 615:
case 950:
case 765:
case 163:
case 2727:
case 838:
case 3523:
case 2607:
case 3787:
case 2583:
case 22:
case 581:
case 276:
case 1253:
case 2397:
case 1985:
case 2912:
case 3464:
case 2263:
case 2504:
case 3086:
case 1137:
case 1180:
case 773:
case 803:
case 3756:
case 2502:
case 1835:
case 2594:
case 2697:
case 2046:
case 133:
case 868:
case 680:
case 3636:
case 2011:
case 1574:
case 1940:
case 1827:
case 1508:
case 3005:
case 959:
case 2217:
case 186:
case 3431:
case 3238:
case 896:
case 1677:
case 4042:
case 3882:
case 3031:
case 1963:
case 2822:
case 913:
case 3405:
case 2748:
case 507:
case 3934:
case 1276:
case 2698:
case 478:
case 2308:
case 2374:
case 3381:
case 1683:
case 1801:
case 2134:
case 1828:
case 3560:
case 728:
case 1394:
case 3280:
case 3237:
case 937:
case 2296:
case 1302:
case 1419:
case 3988:
case 530:
case 569:
case 2083:
case 2115:
case 3732:
case 3652:
case 1497:
case 853:
case 2333:
case 574:
case 3586:
case 1182:
case 483:
case 2910:
case 1041:
case 1799:
case 3761:
case 2863:
case 2173:
case 1329:
case 3110:
case 900:
case 644:
case 1944:
case 521:
case 711:
case 2188:
case 28:
case 3101:
case 1098:
case 4020:
case 3595:
case 3930:
case 1416:
case 2927:
case 922:
case 3269:
case 885:
case 2370:
case 1441:
case 2776:
case 2529:
case 3135:
case 2712:
case 1248:
case 3589:
case 195:
case 940:
case 2224:
case 3423:
case 2935:
case 1390:
case 2483:
case 3845:
case 1533:
case 370:
case 362:
case 1600:
case 268:
case 1720:
case 3375:
case 1718:
case 2492:
case 2478:
case 316:
case 819:
case 2402:
case 2885:
case 2244:
case 203:
case 1311:
case 971:
case 3293:
case 3825:
case 2494:
case 1876:
case 1812:
case 1626:
case 3675:
case 2156:
case 3367:
case 1690:
case 3282:
case 379:
case 2896:
case 40:
case 1421:
case 3956:
case 3837:
case 949:
case 2714:
case 924:
case 2820:
case 788:
case 2818:
case 2670:
case 2549:
case 3191:
case 620:
case 2465:
case 3505:
case 1879:
case 1074:
case 1008:
case 466:
case 4040:
case 2159:
case 1709:
case 1629:
case 1235:
case 1455:
case 3368:
case 225:
case 3043:
case 158:
case 76:
case 631:
case 2511:
case 3557:
case 17:
case 3851:
case 3734:
case 126:
case 2546:
case 1227:
case 808:
case 778:
case 3036:
case 1492:
case 550:
case 2097:
case 2646:
case 1935:
case 2796:
case 1271:
case 2814:
case 3780:
case 2019:
case 3737:
case 3554:
case 2720:
case 168:
case 2600:
case 75:
case 833:
case 2248:
case 1529:
case 2498:
case 1806:
case 2472:
case 295:
case 389:
case 3259:
case 886:
case 1927:
case 1776:
case 3605:
case 2441:
case 1370:
case 196:
case 2944:
case 2853:
case 3039:
case 3993:
case 1188:
case 582:
case 2649:
case 1477:
case 2799:
case 2041:
case 89:
case 567:
case 1173:
case 3122:
case 2497:
case 3575:
case 2182:
case 1078:
case 2247:
case 994:
case 1092:
case 627:
case 1590:
case 3144:
case 4012:
case 1928:
case 3662:
case 354:
case 1511:
case 2103:
case 1991:
case 1753:
case 27:
case 3142:
case 3287:
case 4014:
case 3450:
case 992:
case 3362:
case 723:
case 513:
case 1899:
case 2407:
case 143:
case 3124:
case 1500:
case 1948:
case 258:
case 3171:
case 2184:
case 1633:
case 3689:
case 2629:
case 584:
case 2709:
case 1159:
case 2235:
case 473:
case 2455:
case 537:
case 3358:
case 918:
case 1465:
case 2008:
case 2879:
case 3081:
case 3966:
case 2055:
case 3305:
case 1670:
case 2228:
case 3695:
case 3288:
case 2201:
case 3273:
case 3481:
case 2474:
case 1896:
case 2421:
case 1714:
case 380:
case 1947:
case 2812:
case 3686:
case 138:
case 1156:
case 3552:
case 2706:
case 863:
case 2626:
case 1222:
case 1402:
case 2740:
case 2346:
case 875:
case 103:
case 1244:
case 2876:
case 651:
case 591:
case 699:
case 559:
case 3357:
case 1090:
case 766:
case 1912:
case 1504:
case 1263:
case 540:
case 3120:
case 275:
case 110:
case 2137:
case 1607:
case 263:
case 3118:
case 3234:
case 2433:
case 3925:
case 304:
case 2985:
case 74:
case 1397:
case 2253:
case 798:
case 446:
case 2572:
case 3013:
case 3185:
case 670:
case 3856:
case 2516:
case 616:
case 634:
case 46:
case 2665:
case 3980:
case 1341:
case 974:
case 2470:
case 3413:
case 1161:
case 2138:
case 1316:
case 1824:
case 361:
case 3117:
case 1372:
case 1728:
case 1608:
case 1398:
case 969:
case 1842:
case 921:
case 1426:
case 2917:
case 2891:
case 500:
case 488:
case 1490:
case 826:
case 329:
case 3054:
case 70:
case 2304:
case 2519:
case 2033:
case 2378:
case 2722:
case 1206:
case 3938:
case 2694:
case 2392:
case 2848:
case 3643:
case 320:
case 3343:
case 3052:
case 2771:
case 2810:
case 3784:
case 493:
case 2302:
case 3873:
case 3550:
case 601:
case 3888:
case 509:
case 1134:
case 2683:
case 2801:
case 3703:
case 755:
case 3623:
case 3467:
case 342:
case 2742:
case 29:
case 2276:
case 3769:
case 1791:
case 1953:
case 1049:
case 972:
case 1321:
case 1672:
case 2555:
case 1308:
case 331:
case 2212:
case 3068:
case 2145:
case 2365:
case 2677:
case 783:
case 3468:
case 3581:
case 2574:
case 2940:
case 217:
case 632:
case 3887:
case 1217:
case 286:
case 895:
case 3140:
case 1046:
case 1697:
case 1307:
case 1011:
case 3945:
case 302:
case 1502:
case 3106:
case 957:
case 2835:
case 4091:
case 208:
case 714:
case 3067:
case 119:
case 549:
case 736:
case 641:
case 3044:
case 568:
case 2939:
case 3518:
case 3998:
case 752:
case 2260:
case 2858:
case 1015:
case 3653:
case 150:
case 3022:
case 2537:
case 3520:
case 1104:
case 1868:
case 1250:
case 2361:
case 2116:
case 1073:
case 1789:
case 1852:
case 963:
case 1351:
case 3139:
case 2525:
case 2172:
case 628:
case 2198:
case 4086:
case 3846:
case 1281:
case 892:
case 780:
case 3770:
case 3997:
case 635:
case 2713:
case 2551:
case 167:
case 777:
case 807:
case 3800:
case 2538:
case 3312:
case 182:
case 1488:
case 1645:
case 221:
case 1867:
case 58:
case 1415:
case 269:
case 2775:
case 3294:
case 1380:
case 230:
case 2243:
case 1030:
case 2805:
case 1087:
case 818:
case 1532:
case 3136:
case 4089:
case 3422:
case 3955:
case 2484:
case 3471:
case 3283:
case 2223:
case 2895:
case 113:
case 525:
case 35:
case 1534:
case 378:
case 1637:
case 239:
case 6:
case 3204:
case 2403:
case 4058:
case 2767:
case 3278:
case 2950:
case 3890:
case 1165:
case 1875:
case 3826:
case 3612:
case 3314:
case 2469:
case 184:
case 789:
case 2069:
case 2864:
case 257:
case 1651:
case 2121:
case 908:
case 2108:
case 1758:
case 2174:
case 1943:
case 933:
case 1731:
case 2768:
case 2661:
case 4005:
case 191:
case 3024:
case 917:
case 2334:
case 3679:
case 881:
case 3042:
case 1762:
case 3908:
case 1236:
case 451:
case 3974:
case 3540:
case 576:
case 3154:
case 71:
case 1267:
case 281:
case 2133:
case 355:
case 1382:
case 1989:
case 3418:
case 3200:
case 2437:
case 3420:
case 720:
case 1393:
case 995:
case 1603:
case 1587:
case 2315:
case 3017:
case 2051:
case 731:
case 2205:
case 462:
case 470:
case 3648:
case 3485:
case 487:
case 1061:
case 3099:
case 3894:
case 2373:
case 3802:
case 3716:
case 66:
case 3335:
case 1268:
case 4023:
case 2231:
case 2975:
case 2860:
case 2438:
case 3499:
case 1461:
case 294:
case 3113:
case 3085:
case 2170:
case 383:
case 1995:
case 2387:
case 3018:
case 688:
case 2262:
case 3544:
case 3970:
case 839:
case 3865:
case 1190:
case 2582:
case 3020:
case 1126:
case 3522:
case 3719:
case 3006:
case 1100:
case 218:
case 2356:
case 704:
case 1254:
case 693:
case 3347:
case 401:
case 3040:
case 1366:
case 1146:
case 1905:
case 2687:
case 2630:
case 3707:
case 3627:
case 4043:
case 207:
case 958:
case 3755:
case 1957:
case 3409:
case 2569:
case 2289:
case 3229:
case 2967:
case 1559:
case 2673:
case 3804:
case 171:
case 464:
case 3610:
case 63:
case 247:
case 3168:
case 1213:
case 585:
case 1149:
case 479:
case 3628:
case 2781:
case 2295:
case 3708:
case 1962:
case 3721:
case 30:
case 611:
case 1303:
case 1839:
case 729:
case 2615:
case 149:
case 744:
case 1958:
case 3406:
case 2566:
case 1693:
case 1931:
case 3063:
case 1743:
case 2286:
case 1556:
case 3152:
case 1682:
case 3087:
case 2579:
case 738:
case 3532:
case 2640:
case 206:
case 2977:
case 2790:
case 2396:
case 2726:
case 1294:
case 3380:
case 3337:
case 3786:
case 554:
case 694:
case 2035:
case 3177:
case 1800:
case 3488:
case 8:
case 1599:
case 3645:
case 2221:
case 2274:
case 3281:
case 3795:
case 2208:
case 1376:
case 2385:
case 2317:
case 3351:
case 1139:
case 589:
case 2001:
case 2983:
case 475:
case 2255:
case 2435:
case 2399:
case 463:
case 2729:
case 3073:
case 2512:
case 2609:
case 1265:
case 3852:
case 1733:
case 3178:
case 1596:
case 4070:
case 3868:
case 2427:
case 3430:
case 3487:
case 1849:
case 2207:
case 515:
case 123:
case 725:
case 145:
case 743:
case 1972:
case 3183:
case 2123:
case 1653:
case 23:
case 951:
case 1353:
case 1921:
case 3762:
case 1908:
case 647:
case 1540:
case 3194:
case 417:
case 2219:
case 2363:
case 391:
case 359:
case 856:
case 1024:
case 1071:
case 3102:
case 2994:
case 3638:
case 2309:
case 211:
case 3943:
case 78:
case 3059:
case 1277:
case 2048:
case 433:
case 2091:
case 408:
case 2617:
case 3651:
case 1181:
case 2298:
case 3625:
case 2448:
case 337:
case 293:
case 3459:
case 1907:
case 2272:
case 2216:
case 3345:
case 3165:
case 1890:
case 1314:
case 448:
case 607:
case 2306:
case 2620:
case 178:
case 1150:
case 2700:
case 3056:
case 3680:
case 49:
case 1204:
case 1278:
case 2696:
case 1955:
case 1471:
case 2746:
case 2553:
case 313:
case 3757:
case 2711:
case 15:
case 3813:
case 835:
case 768:
case 2618:
case 1865:
case 2479:
case 2186:
case 3126:
case 1522:
case 1719:
case 1175:
case 1018:
case 2855:
case 3666:
case 114:
case 4016:
case 2195:
case 1499:
case 2501:
case 630:
case 2076:
case 3588:
case 1085:
case 2807:
case 1335:
case 3268:
case 3850:
case 674:
case 934:
case 2476:
case 1741:
case 1933:
case 3061:
case 1802:
case 2189:
case 987:
case 2535:
case 3129:
case 1328:
case 1772:
case 3964:
case 962:
case 970:
case 3669:
case 4019:
case 1798:
case 2642:
case 340:
case 256:
case 1420:
case 2164:
case 3393:
case 1211:
case 3603:
case 3881:
case 2079:
case 2808:
case 3723:
case 1496:
case 3530:
case 3587:
case 3267:
case 2624:
case 3382:
case 1418:
case 228:
case 1200:
case 2929:
case 2792:
case 2547:
case 4055:
case 2794:
case 941:
case 1290:
case 2702:
case 2324:
case 2622:
case 657:
case 597:
case 3384:
case 324:
case 349:
case 846:
case 2342:
case 2644:
case 2898:
case 3693:
case 3369:
case 1628:
case 1774:
case 1708:
case 2158:
case 3962:
case 932:
case 1804:
case 2131:
case 371:
case 1878:
case 1610:
case 1348:
case 964:
case 1892:
case 426:
case 47:
case 2900:
case 198:
case 2548:
case 2014:
case 2819:
case 2946:
case 1755:
case 531:
case 2591:
case 2:
case 3760:
case 1542:
case 166:
case 2157:
case 1707:
case 3111:
case 1463:
case 273:
case 710:
case 265:
case 1524:
case 3100:
case 1167:
case 2453:
case 4074:
case 309:
case 3434:
case 4021:
case 1347:
case 505:
case 3928:
case 759:
case 154:
case 791:
case 2266:
case 2732:
case 3115:
case 3779:
case 3526:
case 1122:
case 2652:
case 2354:
case 3078:
case 2586:
case 3809:
case 3004:
case 3092:
case 2973:
case 4025:
case 3910:
case 494:
case 2668:
case 3863:
case 1631:
case 1738:
case 2128:
case 935:
case 1993:
case 2101:
case 38:
case 1513:
case 3477:
case 2595:
case 928:
case 2930:
case 2987:
case 481:
case 675:
case 2313:
case 851:
case 899:
case 396:
case 3370:
case 1725:
case 3712:
case 3529:
case 737:
case 1439:
case 189:
case 956:
case 3224:
case 2667:
case 2423:
case 2845:
case 3271:
case 2284:
case 1780:
case 1386:
case 2375:
case 368:
case 545:
case 1554:
case 3187:
case 3130:
case 287:
case 1657:
case 2564:
case 2203:
case 3404:
case 216:
case 264:
case 1215:
case 303:
case 2443:
case 3494:
case 1050:
case 338:
case 1552:
case 2147:
case 279:
case 686:
case 1273:
case 1481:
case 3065:
case 2956:
case 1745:
case 2837:
case 3714:
case 2880:
case 180:
case 3820:
case 2531:
case 608:
case 3818:
case 1305:
case 782:
case 3670:
case 890:
case 3549:
case 2191:
case 3465:
case 965:
case 1832:
case 1081:
case 973:
case 2148:
case 1984:
case 648:
case 325:
case 3899:
case 407:
case 2043:
case 343:
case 2959:
case 3500:
case 2460:
case 1124:
case 2352:
case 3948:
case 3633:
case 152:
case 1969:
case 3991:
case 3753:
case 4045:
case 492:
case 1142:
case 1230:
case 1450:
case 1664:
case 129:
case 1054:
case 724:
case 514:
case 1782:
case 536:
case 144:
case 749:
case 2961:
case 1643:
case 1475:
case 3426:
case 2064:
case 3240:
case 3490:
case 988:
case 1323:
case 2788:
case 771:
case 3621:
case 3701:
case 1117:
case 3674:
case 3372:
case 2803:
case 3728:
case 3979:
case 3398:
case 2932:
case 430:
case 1413:
case 1199:
case 583:
case 3161:
case 3316:
case 3871:
case 2245:
case 2773:
case 2495:
case 3824:
case 4093:
case 3735:
case 2112:
case 3209:
case 841:
case 1937:
case 4082:
case 3429:
case 1013:
case 3655:
case 946:
case 3607:
case 2523:
case 832:
case 1118:
case 2787:
case 2730:
case 376:
case 1925:
case 709:
case 879:
case 1234:
case 3976:
case 32:
case 1660:
case 3397:
case 3090:
case 864:
case 3592:
case 3578:
case 2650:
case 2086:
case 3504:
case 310:
case 2350:
case 102:
case 2756:
case 2462:
case 4069:
case 887:
case 50:
case 3747:
case 816:
case 834:
case 3594:
case 3914:
case 1232:
case 1140:
case 1452:
case 3697:
case 1766:
case 2057:
case 862:
case 1468:
case 3355:
case 1887:
case 1830:
case 2431:
case 2238:
case 2458:
case 3449:
case 299:
case 3299:
case 1109:
case 2031:
case 2759:
case 67:
case 2882:
case 131:
case 2405:
case 3748:
case 1068:
case 472:
case 2225:
case 2934:
case 2893:
case 3791:
case 3953:
case 1769:
case 3049:
case 3285:
case 1815:
case 2058:
case 3672:
case 658:
case 598:
case 11:
case 3134:
case 353:
case 2153:
case 54:
case 3400:
case 722:
case 2062:
case 1163:
case 740:
case 3411:
case 2237:
case 120:
case 1343:
case 1052:
case 1784:
case 566:
case 1873:
case 1550:
case 3296:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1759503601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,];
var gg_b = "1759503601/";

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
