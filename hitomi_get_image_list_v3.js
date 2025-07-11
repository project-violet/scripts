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
case 135:
case 2928:
case 1182:
case 3877:
case 665:
case 4008:
case 3209:
case 2274:
case 1819:
case 3102:
case 2936:
case 2694:
case 333:
case 3747:
case 3547:
case 1516:
case 401:
case 2368:
case 1044:
case 1532:
case 1039:
case 2843:
case 2086:
case 853:
case 289:
case 1866:
case 3370:
case 3621:
case 3752:
case 483:
case 1569:
case 2041:
case 3059:
case 2773:
case 2912:
case 1062:
case 2573:
case 3221:
case 2115:
case 64:
case 3055:
case 287:
case 600:
case 2612:
case 504:
case 3437:
case 4084:
case 1035:
case 274:
case 2010:
case 3150:
case 254:
case 2793:
case 1260:
case 447:
case 2294:
case 3897:
case 3500:
case 844:
case 2461:
case 1780:
case 1580:
case 2127:
case 1689:
case 3048:
case 695:
case 1483:
case 117:
case 2674:
case 2636:
case 3205:
case 2303:
case 1815:
case 3905:
case 1464:
case 2746:
case 69:
case 1831:
case 1763:
case 2546:
case 1584:
case 2779:
case 2579:
case 3504:
case 2834:
case 3237:
case 2849:
case 1460:
case 3668:
case 682:
case 1149:
case 427:
case 1011:
case 3394:
case 1134:
case 2961:
case 2261:
case 824:
case 263:
case 469:
case 4080:
case 3903:
case 2305:
case 1007:
case 1485:
case 3087:
case 499:
case 3409:
case 429:
case 3603:
case 171:
case 1664:
case 3374:
case 216:
case 3336:
case 712:
case 1642:
case 526:
case 467:
case 596:
case 1471:
case 933:
case 3788:
case 1356:
case 1508:
case 1708:
case 293:
case 2270:
case 578:
case 2845:
case 2092:
case 558:
case 1158:
case 3968:
case 2799:
case 2775:
case 2690:
case 186:
case 3312:
case 4032:
case 3126:
case 2412:
case 3899:
case 979:
case 3545:
case 3607:
case 205:
case 3596:
case 1341:
case 1653:
case 290:
case 2362:
case 779:
case 220:
case 1726:
case 759:
case 1538:
case 930:
case 3633:
case 614:
case 510:
case 2406:
case 3439:
case 3758:
case 1386:
case 3306:
case 3444:
case 2335:
case 1825:
case 757:
case 3435:
case 2101:
case 1310:
case 1953:
case 648:
case 3163:
case 9:
case 1455:
case 784:
case 3184:
case 3207:
case 3907:
case 3879:
case 1987:
case 957:
case 1554:
case 3083:
case 2020:
case 977:
case 1754:
case 1003:
case 1801:
case 3911:
case 3881:
case 3749:
case 2622:
case 984:
case 3042:
case 2606:
case 3639:
case 2800:
case 3060:
case 1823:
case 3433:
case 4067:
case 1550:
case 2597:
case 1372:
case 1021:
case 1955:
case 3530:
case 1487:
case 3407:
case 3085:
case 377:
case 3091:
case 1948:
case 2307:
case 3893:
case 384:
case 3411:
case 2123:
case 1100:
case 2311:
case 603:
case 379:
case 1147:
case 3322:
case 480:
case 3116:
case 1502:
case 1702:
case 3582:
case 3440:
case 911:
case 2852:
case 1259:
case 1959:
case 1152:
case 330:
case 3169:
case 3962:
case 3262:
case 2577:
case 1655:
case 3132:
case 55:
case 3939:
case 172:
case 2418:
case 3635:
case 711:
case 2429:
case 1806:
case 3216:
case 1488:
case 3043:
case 3886:
case 309:
case 3680:
case 2623:
case 3408:
case 3329:
case 3771:
case 2308:
case 2556:
case 921:
case 231:
case 988:
case 341:
case 3841:
case 825:
case 1375:
case 4068:
case 2798:
case 2077:
case 2598:
case 1159:
case 721:
case 791:
case 102:
case 3144:
case 788:
case 2106:
case 1399:
case 761:
case 2401:
case 3560:
case 2097:
case 3632:
case 1155:
case 1346:
case 3965:
case 2417:
case 618:
case 1379:
case 2848:
case 3030:
case 1721:
case 3317:
case 3785:
case 1505:
case 1148:
case 961:
case 3585:
case 606:
case 3791:
case 2855:
case 1200:
case 3810:
case 2223:
case 3980:
case 2923:
case 673:
case 2425:
case 2201:
case 2901:
case 4021:
case 560:
case 1737:
case 134:
case 1393:
case 1537:
case 3133:
case 2217:
case 2917:
case 1204:
case 1067:
case 3814:
case 2365:
case 3263:
case 3557:
case 86:
case 2853:
case 3872:
case 2520:
case 1054:
case 907:
case 3783:
case 2720:
case 3107:
case 2629:
case 1688:
case 3742:
case 2380:
case 2051:
case 3542:
case 3111:
case 3208:
case 4009:
case 3908:
case 1818:
case 505:
case 2122:
case 1288:
case 3416:
case 1988:
case 2229:
case 3045:
case 2316:
case 89:
case 275:
case 255:
case 321:
case 2369:
case 1604:
case 3663:
case 709:
case 1038:
case 452:
case 882:
case 2332:
case 1768:
case 590:
case 1822:
case 520:
case 624:
case 438:
case 2118:
case 101:
case 722:
case 3654:
case 848:
case 2631:
case 296:
case 593:
case 3366:
case 1945:
case 1245:
case 516:
case 149:
case 435:
case 1443:
case 3088:
case 736:
case 3168:
case 78:
case 4062:
case 508:
case 2099:
case 2170:
case 3226:
case 3926:
case 2419:
case 3238:
case 3319:
case 3667:
case 4044:
case 1430:
case 2572:
case 3315:
case 2213:
case 1157:
case 4035:
case 1084:
case 3004:
case 2079:
case 3450:
case 2095:
case 2842:
case 1658:
case 1397:
case 1533:
case 2350:
case 1733:
case 1861:
case 1934:
case 1234:
case 1949:
case 1142:
case 1511:
case 1711:
case 3254:
case 3954:
case 1164:
case 2931:
case 2231:
case 1696:
case 2857:
case 3787:
case 2714:
case 2514:
case 3587:
case 147:
case 563:
case 2413:
case 3755:
case 2891:
case 4033:
case 1930:
case 3467:
case 2915:
case 3121:
case 1065:
case 2885:
case 1160:
case 1894:
case 1735:
case 3950:
case 2510:
case 362:
case 2093:
case 2710:
case 1434:
case 4007:
case 639:
case 1643:
case 3000:
case 1449:
case 2860:
case 2666:
case 2431:
case 3105:
case 615:
case 1191:
case 127:
case 3602:
case 881:
case 3898:
case 898:
case 3202:
case 167:
case 3109:
case 2174:
case 1812:
case 1189:
case 2627:
case 1445:
case 3047:
case 785:
case 1016:
case 2266:
case 1171:
case 2871:
case 1544:
case 3856:
case 942:
case 3650:
case 1744:
case 486:
case 803:
case 2586:
case 3438:
case 2741:
case 2889:
case 876:
case 856:
case 2541:
case 1874:
case 2919:
case 2112:
case 3559:
case 1762:
case 2073:
case 589:
case 1562:
case 3520:
case 2872:
case 2583:
case 1031:
case 2783:
case 3720:
case 2564:
case 4094:
case 3925:
case 2034:
case 2742:
case 3225:
case 3380:
case 2323:
case 3051:
case 2542:
case 1761:
case 3629:
case 1561:
case 1995:
case 1699:
case 1281:
case 2757:
case 2963:
case 1675:
case 1790:
case 2557:
case 1246:
case 817:
case 1946:
case 1590:
case 2465:
case 3217:
case 2984:
case 1279:
case 2814:
case 1979:
case 1172:
case 3887:
case 2663:
case 95:
case 97:
case 1473:
case 3617:
case 1352:
case 3369:
case 819:
case 2432:
case 1695:
case 4012:
case 3118:
case 1192:
case 3332:
case 1999:
case 3601:
case 1681:
case 75:
case 2892:
case 2045:
case 77:
case 2208:
case 4074:
case 173:
case 4036:
case 2908:
case 3122:
case 511:
case 153:
case 2416:
case 3229:
case 291:
case 288:
case 106:
case 2140:
case 375:
case 2162:
case 2269:
case 3077:
case 1475:
case 910:
case 2665:
case 1973:
case 1273:
case 775:
case 3106:
case 2932:
case 2232:
case 498:
case 1693:
case 2144:
case 164:
case 1388:
case 3756:
case 2771:
case 3556:
case 710:
case 1839:
case 456:
case 2216:
case 2043:
case 2886:
case 1066:
case 3623:
case 1736:
case 955:
case 83:
case 2789:
case 559:
case 4061:
case 3855:
case 2785:
case 2585:
case 3425:
case 557:
case 3223:
case 2980:
case 3923:
case 1495:
case 3578:
case 2632:
case 3524:
case 2135:
case 5:
case 468:
case 2760:
case 4090:
case 124:
case 2669:
case 3848:
case 3384:
case 2463:
case 2484:
case 3363:
case 1334:
case 1376:
case 1023:
case 3927:
case 649:
case 1451:
case 2878:
case 2824:
case 2548:
case 2467:
case 2313:
case 1805:
case 3885:
case 3367:
case 3891:
case 3093:
case 2250:
case 1997:
case 683:
case 1358:
case 796:
case 3586:
case 3871:
case 2650:
case 713:
case 1198:
case 2559:
case 3615:
case 958:
case 3326:
case 3741:
case 1977:
case 3889:
case 3219:
case 512:
case 3541:
case 1809:
case 3112:
case 2202:
case 3174:
case 28:
case 996:
case 732:
case 3128:
case 4022:
case 647:
case 778:
case 758:
case 3266:
case 3099:
case 1518:
case 1718:
case 3170:
case 3792:
case 3592:
case 2319:
case 285:
case 2667:
case 2926:
case 2938:
case 4006:
case 2238:
case 358:
case 838:
case 2402:
case 697:
case 3631:
case 3302:
case 396:
case 3466:
case 1868:
case 1029:
case 2088:
case 872:
case 2366:
case 1651:
case 2327:
case 3161:
case 1251:
case 699:
case 1951:
case 3714:
case 2103:
case 1120:
case 2254:
case 2954:
case 366:
case 3190:
case 3864:
case 3415:
case 3079:
case 2004:
case 2753:
case 3572:
case 3883:
case 2626:
case 1803:
case 3913:
case 3046:
case 3213:
case 2450:
case 46:
case 904:
case 3842:
case 619:
case 3261:
case 363:
case 787:
case 165:
case 2154:
case 3014:
case 4023:
case 1385:
case 774:
case 1220:
case 2903:
case 754:
case 3305:
case 3113:
case 2704:
case 2053:
case 3321:
case 1717:
case 2504:
case 2167:
case 987:
case 3546:
case 3290:
case 2668:
case 1424:
case 3834:
case 3795:
case 3670:
case 2937:
case 1478:
case 3595:
case 2851:
case 2237:
case 585:
case 2968:
case 3799:
case 2268:
case 3270:
case 3970:
case 3845:
case 2637:
case 3092:
case 542:
case 1498:
case 743:
case 308:
case 3690:
case 2328:
case 1389:
case 2409:
case 3436:
case 1826:
case 2603:
case 1838:
case 323:
case 3661:
case 1022:
case 3858:
case 470:
case 3843:
case 3086:
case 450:
case 389:
case 2370:
case 3368:
case 1678:
case 3470:
case 12:
case 522:
case 3773:
case 3119:
case 19:
case 3912:
case 1802:
case 3573:
case 1177:
case 2752:
case 880:
case 1998:
case 723:
case 145:
case 2605:
case 439:
case 916:
case 3928:
case 3974:
case 2102:
case 182:
case 343:
case 536:
case 415:
case 2747:
case 993:
case 1256:
case 2547:
case 923:
case 1342:
case 3461:
case 2700:
case 1523:
case 2361:
case 834:
case 963:
case 2897:
case 1656:
case 1850:
case 3303:
case 671:
case 3830:
case 1420:
case 3674:
case 2609:
case 3636:
case 387:
case 2390:
case 562:
case 3612:
case 686:
case 2921:
case 2221:
case 1698:
case 374:
case 3010:
case 354:
case 2437:
case 1978:
case 1924:
case 257:
case 2085:
case 277:
case 1094:
case 3123:
case 2180:
case 1727:
case 507:
case 284:
case 3797:
case 3024:
case 3333:
case 3597:
case 2235:
case 1210:
case 4013:
case 1910:
case 3800:
case 2060:
case 2433:
case 2730:
case 444:
case 1472:
case 1515:
case 2:
case 960:
case 1715:
case 1173:
case 3577:
case 1719:
case 801:
case 1941:
case 1519:
case 920:
case 1012:
case 30:
case 990:
case 2944:
case 2244:
case 2635:
case 2318:
case 418:
case 705:
case 1816:
case 3906:
case 2939:
case 2239:
case 1986:
case 2071:
case 1832:
case 3056:
case 541:
case 279:
case 2543:
case 406:
case 2322:
case 1566:
case 2743:
case 259:
case 1869:
case 1028:
case 453:
case 1036:
case 3340:
case 2782:
case 2582:
case 509:
case 181:
case 390:
case 464:
case 90:
case 320:
case 1672:
case 867:
case 940:
case 2758:
case 2558:
case 1992:
case 2444:
case 1292:
case 1486:
case 4019:
case 899:
case 3344:
case 2439:
case 3888:
case 3922:
case 3222:
case 2745:
case 588:
case 2545:
case 2611:
case 305:
case 211:
case 3020:
case 1348:
case 1884:
case 1214:
case 4027:
case 2576:
case 3551:
case 2895:
case 2549:
case 1061:
case 2881:
case 2749:
case 1692:
case 3335:
case 2233:
case 2933:
case 3618:
case 869:
case 1410:
case 638:
case 494:
case 424:
case 1972:
case 168:
case 3117:
case 897:
case 1355:
case 1146:
case 2163:
case 3035:
case 2924:
case 1437:
case 3827:
case 3960:
case 1150:
case 2197:
case 1055:
case 1221:
case 608:
case 26:
case 2357:
case 3765:
case 3130:
case 1609:
case 2420:
case 1048:
case 3689:
case 616:
case 1403:
case 3985:
case 3320:
case 3464:
case 623:
case 3580:
case 1700:
case 3780:
case 3143:
case 1547:
case 663:
case 1747:
case 319:
case 3271:
case 3716:
case 73:
case 3516:
case 3819:
case 1909:
case 1209:
case 3989:
case 335:
case 4088:
case 810:
case 3685:
case 971:
case 1605:
case 2298:
case 3569:
case 1621:
case 2177:
case 93:
case 1059:
case 875:
case 22:
case 3532:
case 2624:
case 3044:
case 3866:
case 3660:
case 2006:
case 3039:
case 48:
case 3642:
case 2456:
case 515:
case 2022:
case 2371:
case 3708:
case 1588:
case 3145:
case 1788:
case 3489:
case 3040:
case 2838:
case 2826:
case 539:
case 1409:
case 2620:
case 2389:
case 225:
case 295:
case 4047:
case 935:
case 1374:
case 3664:
case 33:
case 422:
case 386:
case 200:
case 24:
case 1126:
case 3398:
case 719:
case 1138:
case 570:
case 654:
case 1637:
case 550:
case 674:
case 2018:
case 4052:
case 689:
case 1237:
case 2478:
case 1851:
case 1937:
case 2424:
case 717:
case 2701:
case 3460:
case 2501:
case 462:
case 3763:
case 3831:
case 2854:
case 1504:
case 3784:
case 3813:
case 3283:
case 2385:
case 3983:
case 1405:
case 1154:
case 917:
case 3264:
case 3485:
case 3964:
case 3942:
case 643:
case 3176:
case 1394:
case 1163:
case 3767:
case 3953:
case 1057:
case 1184:
case 2090:
case 2179:
case 2713:
case 3455:
case 2272:
case 4030:
case 1933:
case 3310:
case 3037:
case 2181:
case 1435:
case 3825:
case 1749:
case 804:
case 2061:
case 3801:
case 1549:
case 1211:
case 407:
case 1042:
case 1534:
case 3987:
case 1879:
case 2214:
case 1064:
case 2348:
case 3754:
case 3003:
case 3448:
case 1607:
case 1240:
case 4043:
case 752:
case 276:
case 1796:
case 203:
case 1899:
case 1108:
case 1545:
case 1745:
case 738:
case 4082:
case 1633:
case 2808:
case 2486:
case 972:
case 2199:
case 1558:
case 952:
case 3386:
case 1758:
case 3653:
case 2359:
case 228:
case 3738:
case 938:
case 1873:
case 3502:
case 2074:
case 3009:
case 858:
case 1089:
case 1440:
case 878:
case 421:
case 1743:
case 159:
case 2566:
case 1322:
case 1543:
case 3147:
case 1116:
case 1071:
case 2986:
case 1239:
case 1939:
case 1635:
case 564:
case 1262:
case 130:
case 2012:
case 338:
case 4058:
case 2941:
case 3372:
case 594:
case 524:
case 3453:
case 3659:
case 620:
case 1:
case 690:
case 2515:
case 1530:
case 3955:
case 3255:
case 2353:
case 1730:
case 1165:
case 3823:
case 2880:
case 2686:
case 3750:
case 3100:
case 1180:
case 2527:
case 177:
case 4076:
case 2865:
case 3005:
case 4049:
case 1091:
case 3314:
case 1265:
case 2673:
case 2015:
case 2479:
case 3155:
case 3346:
case 3652:
case 1317:
case 3721:
case 1030:
case 3379:
case 2304:
case 3521:
case 2446:
case 224:
case 2481:
case 2993:
case 1980:
case 4083:
case 1325:
case 1280:
case 3900:
case 4064:
case 2794:
case 2594:
case 2027:
case 3705:
case 734:
case 1785:
case 655:
case 1791:
case 675:
case 3002:
case 980:
case 808:
case 1789:
case 141:
case 3509:
case 1408:
case 1680:
case 109:
case 3600:
case 1043:
case 1216:
case 1916:
case 2839:
case 1771:
case 411:
case 1571:
case 1144:
case 780:
case 1139:
case 1932:
case 548:
case 2186:
case 2273:
case 1665:
case 2512:
case 816:
case 3952:
case 2019:
case 3252:
case 503:
case 188:
case 3988:
case 2347:
case 273:
case 1208:
case 556:
case 1892:
case 2681:
case 2299:
case 2192:
case 1058:
case 528:
case 2695:
case 3822:
case 581:
case 2679:
case 218:
case 2840:
case 3038:
case 3452:
case 3026:
case 2275:
case 3373:
case 2172:
case 2979:
case 3067:
case 2279:
case 2807:
case 1284:
case 2590:
case 2013:
case 3153:
case 2675:
case 1963:
case 1263:
case 1757:
case 65:
case 2493:
case 244:
case 2699:
case 2295:
case 3537:
case 3393:
case 2561:
case 854:
case 2833:
case 1608:
case 457:
case 1323:
case 1742:
case 1034:
case 1076:
case 4085:
case 1764:
case 2031:
case 3054:
case 3703:
case 1872:
case 1583:
case 161:
case 1450:
case 797:
case 3861:
case 1137:
case 3533:
case 3397:
case 769:
case 1638:
case 1626:
case 1820:
case 3430:
case 1753:
case 2017:
case 1553:
case 2330:
case 3696:
case 3890:
case 2120:
case 3645:
case 2251:
case 3276:
case 2025:
case 1327:
case 3711:
case 3249:
case 4048:
case 3511:
case 3949:
case 929:
case 1366:
case 239:
case 3870:
case 3634:
case 1088:
case 3443:
case 525:
case 2029:
case 3008:
case 3996:
case 840:
case 3296:
case 967:
case 215:
case 433:
case 3482:
case 80:
case 270:
case 2477:
case 1926:
case 1226:
case 412:
case 604:
case 3958:
case 3258:
case 2518:
case 3445:
case 399:
case 3943:
case 2156:
case 545:
case 3016:
case 783:
case 3496:
case 3189:
case 3982:
case 3282:
case 2396:
case 136:
case 901:
case 582:
case 1109:
case 3874:
case 1426:
case 1052:
case 2977:
case 3069:
case 1438:
case 749:
case 3762:
case 2198:
case 3744:
case 983:
case 3032:
case 2697:
case 1856:
case 3544:
case 3739:
case 2706:
case 3539:
case 701:
case 59:
case 2506:
case 2297:
case 4053:
case 1250:
case 3160:
case 56:
case 3230:
case 1555:
case 658:
case 1121:
case 1467:
case 1548:
case 1105:
case 1454:
case 947:
case 1748:
case 3185:
case 2821:
case 327:
case 1331:
case 3191:
case 397:
case 3434:
case 3080:
case 2376:
case 3449:
case 2334:
case 3351:
case 3643:
case 613:
case 964:
case 2822:
case 3570:
case 833:
case 3681:
case 1601:
case 3299:
case 2768:
case 3999:
case 3192:
case 3840:
case 2038:
case 2452:
case 3679:
case 1369:
case 318:
case 306:
case 764:
case 155:
case 4056:
case 1316:
case 2447:
case 1229:
case 353:
case 2288:
case 1122:
case 2818:
case 3347:
case 373:
case 609:
case 1380:
case 1925:
case 2400:
case 1629:
case 1423:
case 2503:
case 724:
case 1720:
case 3031:
case 2054:
case 2187:
case 1520:
case 3114:
case 3590:
case 3946:
case 2153:
case 3790:
case 2067:
case 4078:
case 4024:
case 1917:
case 1217:
case 3295:
case 924:
case 2737:
case 3981:
case 3281:
case 3811:
case 1901:
case 3794:
case 3835:
case 2647:
case 3594:
case 1223:
case 2900:
case 2200:
case 1855:
case 621:
case 2148:
case 2505:
case 1848:
case 2379:
case 2521:
case 1363:
case 1417:
case 3673:
case 3015:
case 2155:
case 2346:
case 1524:
case 1724:
case 2381:
case 3495:
case 460:
case 324:
case 3993:
case 3293:
case 2395:
case 1106:
case 364:
case 420:
case 202:
case 2952:
case 2159:
case 3019:
case 3475:
case 918:
case 1798:
case 773:
case 3273:
case 572:
case 3973:
case 3512:
case 15:
case 3141:
case 3728:
case 3774:
case 2709:
case 131:
case 906:
case 3862:
case 1859:
case 2947:
case 405:
case 1756:
case 3388:
case 1623:
case 2600:
case 2488:
case 2806:
case 3839:
case 1615:
case 950:
case 1338:
case 739:
case 3198:
case 2874:
case 3809:
case 31:
case 2630:
case 1219:
case 1889:
case 1741:
case 2069:
case 2828:
case 2739:
case 3706:
case 3506:
case 3697:
case 2032:
case 1966:
case 770:
case 229:
case 1266:
case 3156:
case 2445:
case 1627:
case 3396:
case 1136:
case 2812:
case 1174:
case 915:
case 267:
case 519:
case 423:
case 493:
case 2682:
case 937:
case 1354:
case 1666:
case 3023:
case 1860:
case 1194:
case 2476:
case 517:
case 2434:
case 1927:
case 3178:
case 1710:
case 4072:
case 1510:
case 3124:
case 3297:
case 642:
case 2735:
case 1885:
case 1915:
case 3805:
case 685:
case 2930:
case 1891:
case 1367:
case 247:
case 2507:
case 8:
case 2696:
case 337:
case 1931:
case 2164:
case 2890:
case 68:
case 2949:
case 1161:
case 2976:
case 3025:
case 1081:
case 2733:
case 884:
case 1350:
case 2533:
case 2658:
case 1842:
case 3497:
case 622:
case 1415:
case 2084:
case 2157:
case 3330:
case 1190:
case 1864:
case 1772:
case 1913:
case 2063:
case 1883:
case 1572:
case 91:
case 3477:
case 1613:
case 4086:
case 1075:
case 1419:
case 350:
case 859:
case 3718:
case 879:
case 4041:
case 3518:
case 53:
case 1592:
case 132:
case 2443:
case 3868:
case 249:
case 1466:
case 2649:
case 113:
case 551:
case 339:
case 2870:
case 1302:
case 1631:
case 126:
case 443:
case 2296:
case 3382:
case 2740:
case 1412:
case 583:
case 2398:
case 23:
case 1896:
case 841:
case 1690:
case 108:
case 92:
case 782:
case 1575:
case 1799:
case 1092:
case 745:
case 4073:
case 1270:
case 193:
case 3371:
case 123:
case 446:
case 3729:
case 2508:
case 2145:
case 3456:
case 79:
case 501:
case 982:
case 395:
case 2196:
case 1309:
case 271:
case 1428:
case 2040:
case 251:
case 1436:
case 945:
case 2683:
case 3620:
case 365:
case 3867:
case 1305:
case 2283:
case 3220:
case 2491:
case 2983:
case 163:
case 1261:
case 547:
case 2134:
case 2011:
case 2242:
case 1494:
case 2149:
case 3525:
case 1581:
case 1849:
case 3501:
case 1670:
case 1876:
case 1779:
case 2584:
case 2957:
case 1990:
case 2763:
case 1546:
case 2831:
case 404:
case 2563:
case 96:
case 2985:
case 2285:
case 1636:
case 217:
case 1830:
case 1127:
case 3523:
case 527:
case 3723:
case 597:
case 466:
case 3342:
case 3850:
case 1294:
case 2442:
case 2960:
case 1010:
case 3197:
case 174:
case 1337:
case 2827:
case 2565:
case 3357:
case 4095:
case 187:
case 861:
case 2062:
case 3802:
case 1119:
case 432:
case 1212:
case 888:
case 3998:
case 891:
case 821:
case 2660:
case 4075:
case 1843:
case 458:
case 2039:
case 795:
case 3624:
case 1368:
case 2716:
case 426:
case 382:
case 700:
case 567:
case 2143:
case 74:
case 2685:
case 529:
case 345:
case 1936:
case 1974:
case 995:
case 2819:
case 1236:
case 2182:
case 1228:
case 2289:
case 1847:
case 3492:
case 3286:
case 756:
case 1206:
case 2392:
case 1906:
case 3816:
case 703:
case 1098:
case 3519:
case 3941:
case 140:
case 348:
case 998:
case 928:
case 2152:
case 502:
case 3012:
case 3074:
case 2009:
case 3869:
case 885:
case 956:
case 2702:
case 903:
case 475:
case 3832:
case 1056:
case 455:
case 3566:
case 728:
case 781:
case 3766:
case 1311:
case 2100:
case 3527:
case 1123:
case 3094:
case 2248:
case 2948:
case 3387:
case 3865:
case 2487:
case 2005:
case 3414:
case 2255:
case 3353:
case 968:
case 3715:
case 2453:
case 2659:
case 1597:
case 1333:
case 3880:
case 1800:
case 1606:
case 3210:
case 1551:
case 3061:
case 3531:
case 3731:
case 3863:
case 3884:
case 2817:
case 3348:
case 368:
case 630:
case 3090:
case 3972:
case 3179:
case 3713:
case 160:
case 3272:
case 2253:
case 3355:
case 2767:
case 2310:
case 2037:
case 3692:
case 2825:
case 1618:
case 914:
case 3195:
case 1335:
case 45:
case 3199:
case 3992:
case 3070:
case 2386:
case 1888:
case 4077:
case 1406:
case 1218:
case 3359:
case 328:
case 2738:
case 1362:
case 381:
case 3175:
case 948:
case 2653:
case 2341:
case 376:
case 105:
case 1222:
case 431:
case 2188:
case 303:
case 822:
case 748:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1752220801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,];
var gg_b = "1752220801/";

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
