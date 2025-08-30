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
case 584:
case 681:
case 3924:
case 3092:
case 1949:
case 665:
case 1502:
case 1525:
case 201:
case 2845:
case 1950:
case 3868:
case 2016:
case 3153:
case 2340:
case 2102:
case 400:
case 2726:
case 3135:
case 4006:
case 4073:
case 2237:
case 1499:
case 1637:
case 3589:
case 3265:
case 2090:
case 1707:
case 1552:
case 317:
case 660:
case 72:
case 986:
case 1124:
case 3149:
case 3084:
case 3890:
case 2343:
case 3395:
case 3775:
case 2672:
case 1272:
case 772:
case 4064:
case 2524:
case 3911:
case 3829:
case 1288:
case 405:
case 2688:
case 701:
case 365:
case 3045:
case 1757:
case 2093:
case 3816:
case 3047:
case 1991:
case 914:
case 436:
case 3386:
case 390:
case 1896:
case 1948:
case 1156:
case 3906:
case 1937:
case 2028:
case 743:
case 695:
case 2249:
case 982:
case 1676:
case 3624:
case 3397:
case 1164:
case 3588:
case 167:
case 1498:
case 1234:
case 1441:
case 1733:
case 642:
case 1887:
case 776:
case 1603:
case 1650:
case 2203:
case 2556:
case 1635:
case 276:
case 2235:
case 1474:
case 1173:
case 3426:
case 3611:
case 2766:
case 3970:
case 451:
case 31:
case 523:
case 1106:
case 2165:
case 812:
case 1527:
case 429:
case 2001:
case 2838:
case 1813:
case 1565:
case 2506:
case 2754:
case 1653:
case 2689:
case 1289:
case 2972:
case 3828:
case 638:
case 250:
case 1730:
case 309:
case 2730:
case 35:
case 2653:
case 2600:
case 3096:
case 1253:
case 1754:
case 1689:
case 3537:
case 2813:
case 1838:
case 3720:
case 79:
case 469:
case 411:
case 556:
case 2012:
case 2460:
case 1847:
case 715:
case 2527:
case 789:
case 1069:
case 570:
case 3379:
case 4067:
case 3346:
case 3462:
case 3010:
case 918:
case 767:
case 563:
case 1436:
case 210:
case 1308:
case 4002:
case 3211:
case 1127:
case 1988:
case 2173:
case 2635:
case 3732:
case 1235:
case 1704:
case 2650:
case 1250:
case 3172:
case 1634:
case 2441:
case 127:
case 1718:
case 2164:
case 634:
case 2676:
case 888:
case 1249:
case 2649:
case 3723:
case 954:
case 2937:
case 215:
case 1028:
case 3013:
case 2156:
case 2896:
case 29:
case 93:
case 2991:
case 3927:
case 2755:
case 3652:
case 3188:
case 3812:
case 3503:
case 3550:
case 3256:
case 3382:
case 2935:
case 2288:
case 1688:
case 3902:
case 2844:
case 875:
case 3549:
case 3433:
case 1672:
case 1989:
case 2953:
case 831:
case 1309:
case 2380:
case 2124:
case 499:
case 2317:
case 3763:
case 3378:
case 2552:
case 620:
case 48:
case 320:
case 2648:
case 1248:
case 3422:
case 2762:
case 3665:
case 1884:
case 1090:
case 3500:
case 1237:
case 2499:
case 2637:
case 2432:
case 4065:
case 1167:
case 3394:
case 3273:
case 870:
case 3952:
case 3627:
case 2111:
case 1291:
case 3405:
case 3085:
case 1340:
case 937:
case 1934:
case 657:
case 1845:
case 2871:
case 101:
case 2525:
case 1511:
case 2502:
case 2976:
case 552:
case 3535:
case 1180:
case 2109:
case 3349:
case 3796:
case 1324:
case 484:
case 1117:
case 1439:
case 337:
case 2030:
case 3983:
case 3855:
case 1701:
case 3195:
case 3020:
case 3303:
case 3350:
case 829:
case 2444:
case 168:
case 2022:
case 3833:
case 2994:
case 2580:
case 1942:
case 1686:
case 500:
case 3032:
case 106:
case 44:
case 2005:
case 1877:
case 3980:
case 2899:
case 1004:
case 2159:
case 3300:
case 2832:
case 1018:
case 3335:
case 3214:
case 2367:
case 3713:
case 1559:
case 1311:
case 3830:
case 2471:
case 3208:
case 2055:
case 2325:
case 836:
case 1279:
case 2820:
case 1642:
case 536:
case 2327:
case 3771:
case 2694:
case 1373:
case 1294:
case 1793:
case 198:
case 1438:
case 749:
case 3348:
case 1447:
case 33:
case 2108:
case 794:
case 3862:
case 3259:
case 1997:
case 447:
case 3807:
case 3098:
case 354:
case 3063:
case 618:
case 3915:
case 3546:
case 1019:
case 3186:
case 551:
case 2410:
case 1790:
case 416:
case 1521:
case 654:
case 1875:
case 3785:
case 2682:
case 2863:
case 2898:
case 294:
case 1026:
case 848:
case 63:
case 249:
case 2678:
case 3197:
case 1364:
case 95:
case 1716:
case 3209:
case 909:
case 529:
case 1729:
case 3243:
case 2295:
case 1115:
case 3412:
case 2115:
case 4009:
case 3609:
case 511:
case 569:
case 1496:
case 3661:
case 2364:
case 614:
case 271:
case 3908:
case 942:
case 194:
case 587:
case 2026:
case 783:
case 1898:
case 235:
case 1946:
case 1979:
case 1158:
case 2521:
case 995:
case 2875:
case 682:
case 1062:
case 2370:
case 2790:
case 2019:
case 3640:
case 88:
case 3826:
case 603:
case 899:
case 2508:
case 2931:
case 3075:
case 735:
case 2836:
case 2997:
case 3921:
case 3819:
case 3659:
case 2514:
case 1108:
case 230:
case 2881:
case 314:
case 1365:
case 2306:
case 2793:
case 1694:
case 2373:
case 2294:
case 1242:
case 2986:
case 2642:
case 3745:
case 1820:
case 1679:
case 2279:
case 2540:
case 544:
case 1055:
case 3747:
case 641:
case 2728:
case 2311:
case 3493:
case 1367:
case 2559:
case 768:
case 3866:
case 488:
case 3077:
case 2751:
case 386:
case 2995:
case 1140:
case 917:
case 2484:
case 1978:
case 706:
case 1899:
case 2004:
case 3542:
case 1033:
case 599:
case 1485:
case 3595:
case 3658:
case 3182:
case 3818:
case 206:
case 2942:
case 2686:
case 1286:
case 2509:
case 128:
case 1994:
case 1143:
case 1444:
case 869:
case 1712:
case 3215:
case 4021:
case 3178:
case 341:
case 3621:
case 2697:
case 1297:
case 1161:
case 3416:
case 2324:
case 2180:
case 1260:
case 2923:
case 449:
case 2281:
case 2505:
case 1566:
case 801:
case 2154:
case 1061:
case 2453:
case 2080:
case 3933:
case 1130:
case 3078:
case 2017:
case 3467:
case 3955:
case 3226:
case 1773:
case 2674:
case 2435:
case 576:
case 3082:
case 4007:
case 3371:
case 2530:
case 3425:
case 543:
case 3748:
case 747:
case 3607:
case 170:
case 1636:
case 3737:
case 1554:
case 494:
case 3219:
case 1706:
case 163:
case 907:
case 131:
case 2555:
case 2698:
case 2118:
case 247:
case 2920:
case 2663:
case 1263:
case 3177:
case 1764:
case 1675:
case 1133:
case 1241:
case 1434:
case 3344:
case 3930:
case 555:
case 1155:
case 1518:
case 2932:
case 1895:
case 1770:
case 3905:
case 1504:
case 3817:
case 3385:
case 2999:
case 175:
case 2878:
case 3046:
case 1008:
case 3563:
case 3815:
case 3962:
case 1157:
case 784:
case 3541:
case 464:
case 1897:
case 1014:
case 2277:
case 74:
case 3218:
case 377:
case 1981:
case 1724:
case 1223:
case 2623:
case 3749:
case 3776:
case 0:
case 3703:
case 3750:
case 827:
case 3204:
case 2557:
case 3633:
case 3175:
case 1472:
case 1301:
case 2491:
case 2702:
case 3605:
case 3266:
case 843:
case 212:
case 3735:
case 2632:
case 572:
case 3313:
case 2126:
case 3465:
case 3957:
case 959:
case 2699:
case 1299:
case 4005:
case 3136:
case 2448:
case 3622:
case 2725:
case 1107:
case 1220:
case 2879:
case 850:
case 3574:
case 3181:
case 284:
case 2015:
case 4030:
case 604:
case 2507:
case 2941:
case 921:
case 1975:
case 3254:
case 3753:
case 3700:
case 3789:
case 985:
case 2519:
case 3654:
case 919:
case 1941:
case 692:
case 3230:
case 3097:
case 2021:
case 3160:
case 3808:
case 793:
case 597:
case 645:
case 2526:
case 3031:
case 1879:
case 1846:
case 2220:
case 3222:
case 1448:
case 1725:
case 308:
case 4066:
case 14:
case 3347:
case 56:
case 2162:
case 406:
case 810:
case 3473:
case 1632:
case 3205:
case 1491:
case 9:
case 4018:
case 2301:
case 2369:
case 288:
case 666:
case 2724:
case 1960:
case 640:
case 3618:
case 2677:
case 1277:
case 3464:
case 2014:
case 2936:
case 3919:
case 3821:
case 752:
case 2897:
case 3575:
case 293:
case 2488:
case 1752:
case 2008:
case 392:
case 889:
case 2831:
case 3257:
case 1533:
case 275:
case 2504:
case 3809:
case 589:
case 2770:
case 2390:
case 3966:
case 3577:
case 1932:
case 396:
case 2155:
case 2518:
case 1403:
case 1104:
case 2329:
case 662:
case 2133:
case 2241:
case 1641:
case 991:
case 3772:
case 2675:
case 770:
case 3339:
case 1920:
case 1663:
case 147:
case 2298:
case 2040:
case 763:
case 483:
case 3424:
case 1476:
case 123:
case 1765:
case 978:
case 3859:
case 510:
case 4026:
case 3199:
case 1236:
case 2636:
case 1530:
case 402:
case 3207:
case 1166:
case 2105:
case 1727:
case 362:
case 1435:
case 2368:
case 3626:
case 3840:
case 1674:
case 2274:
case 4019:
case 2842:
case 897:
case 1522:
case 2130:
case 1080:
case 2061:
case 1154:
case 1453:
case 3120:
case 2043:
case 3918:
case 2566:
case 2260:
case 3095:
case 3377:
case 2984:
case 111:
case 169:
case 229:
case 2590:
case 549:
case 3409:
case 3461:
case 2296:
case 3443:
case 450:
case 3212:
case 2495:
case 1971:
case 1803:
case 2945:
case 3786:
case 2287:
case 251:
case 3993:
case 378:
case 594:
case 2011:
case 3185:
case 1482:
case 1849:
case 828:
case 691:
case 1067:
case 391:
case 2593:
case 3034:
case 3916:
case 427:
case 3651:
case 678:
case 1330:
case 3929:
case 3811:
case 1944:
case 3440:
case 2024:
case 2354:
case 1305:
case 3990:
case 3628:
case 1168:
case 2889:
case 864:
case 2714:
case 1613:
case 1494:
case 2638:
case 2647:
case 1052:
case 729:
case 3414:
case 3113:
case 3693:
case 2056:
case 1987:
case 3742:
case 1245:
case 205:
case 1671:
case 685:
case 3088:
case 2551:
case 3408:
case 564:
case 2528:
case 18:
case 380:
case 3072:
case 199:
case 2684:
case 1284:
case 6:
case 3873:
case 748:
case 700:
case 2064:
case 1913:
case 894:
case 3187:
case 940:
case 2486:
case 3928:
case 3110:
case 1065:
case 2073:
case 2947:
case 3864:
case 2285:
case 1685:
case 2501:
case 3458:
case 1357:
case 2938:
case 1027:
case 42:
case 3856:
case 319:
case 361:
case 953:
case 1239:
case 2639:
case 1717:
case 401:
case 2888:
case 1169:
case 2743:
case 4016:
case 2244:
case 1644:
case 3870:
case 3629:
case 849:
case 3951:
case 1244:
case 2644:
case 1431:
case 1743:
case 3229:
case 2169:
case 2239:
case 1639:
case 3587:
case 744:
case 2780:
case 3510:
case 1709:
case 3216:
case 2357:
case 3091:
case 1569:
case 506:
case 2512:
case 78:
case 1285:
case 1947:
case 568:
case 802:
case 3037:
case 1486:
case 100:
case 913:
case 2913:
case 148:
case 659:
case 2151:
case 3827:
case 939:
case 2837:
case 3513:
case 1759:
case 2783:
case 3360:
case 2996:
case 28:
case 1528:
case 2362:
case 524:
case 2479:
case 1319:
case 1551:
case 2671:
case 2910:
case 1645:
case 105:
case 2987:
case 830:
case 2052:
case 1708:
case 489:
case 2247:
case 3399:
case 3746:
case 3779:
case 49:
case 2238:
case 1213:
case 1714:
case 2168:
case 2800:
case 2853:
case 3228:
case 1366:
case 598:
case 3049:
case 2944:
case 3802:
case 3251:
case 467:
case 3571:
case 787:
case 583:
case 3825:
case 3184:
case 1593:
case 3003:
case 3050:
case 1939:
case 1568:
case 868:
case 2849:
case 535:
case 502:
case 2002:
case 1011:
case 1834:
case 806:
case 607:
case 2803:
case 1945:
case 97:
case 2971:
case 2190:
case 2715:
case 3201:
case 3323:
case 2116:
case 2696:
case 3000:
case 3053:
case 3480:
case 1318:
case 269:
case 674:
case 1451:
case 2063:
case 718:
case 2098:
case 880:
case 967:
case 1640:
case 2915:
case 2862:
case 2259:
case 1784:
case 1283:
case 591:
case 2041:
case 3365:
case 1179:
case 4094:
case 649:
case 23:
case 3860:
case 2348:
case 114:
case 2771:
case 3327:
case 99:
case 1428:
case 819:
case 1643:
case 2131:
case 885:
case 2060:
case 2412:
case 4078:
case 3295:
case 3121:
case 1739:
case 2617:
case 2197:
case 2857:
case 3496:
case 3898:
case 3515:
case 3158:
case 3863:
case 3979:
case 3682:
case 2785:
case 1908:
case 578:
case 3410:
case 2186:
case 3487:
case 3841:
case 754:
case 3007:
case 4082:
case 413:
case 878:
case 3823:
case 2032:
case 1182:
case 2258:
case 3485:
case 3994:
case 3352:
case 328:
case 2787:
case 3517:
case 2099:
case 96:
case 1804:
case 1490:
case 3712:
case 1940:
case 3143:
case 2303:
case 2350:
case 2020:
case 2376:
case 585:
case 2796:
case 519:
case 3030:
case 2983:
case 1178:
case 237:
case 279:
case 664:
case 2221:
case 533:
case 737:
case 2208:
case 1747:
case 1738:
case 1614:
case 2713:
case 3367:
case 1493:
case 1854:
case 1468:
case 2335:
case 404:
case 2142:
case 3302:
case 3832:
case 186:
case 1389:
case 3140:
case 1866:
case 1943:
case 1077:
case 1542:
case 439:
case 1961:
case 1909:
case 2822:
case 3033:
case 3978:
case 2594:
case 3159:
case 580:
case 1917:
case 3183:
case 3484:
case 1594:
case 606:
case 2909:
case 1822:
case 1980:
case 668:
case 1805:
case 2943:
case 286:
case 3995:
case 1353:
case 3728:
case 1142:
case 2854:
case 874:
case 1335:
case 3559:
case 2194:
case 3540:
case 2738:
case 3279:
case 3246:
case 2608:
case 2747:
case 324:
case 3439:
case 3697:
case 3117:
case 2621:
case 1983:
case 2178:
case 2959:
case 179:
case 137:
case 4031:
case 3324:
case 1796:
case 3054:
case 1349:
case 1303:
case 1855:
case 3769:
case 2215:
case 1195:
case 1615:
case 3701:
case 2490:
case 466:
case 3509:
case 1099:
case 50:
case 3942:
case 92:
case 2804:
case 1833:
case 368:
case 2182:
case 2658:
case 1258:
case 306:
case 3543:
case 462:
case 2597:
case 3875:
case 1186:
case 3019:
case 3370:
case 1074:
case 859:
case 302:
case 1785:
case 976:
case 1261:
case 3716:
case 2280:
case 1680:
case 1209:
case 2609:
case 371:
case 258:
case 1857:
case 3278:
case 2739:
case 1197:
case 1617:
case 2217:
case 3115:
case 3695:
case 2792:
case 2401:
case 1243:
case 3793:
case 3373:
case 2428:
case 1348:
case 758:
case 214:
case 13:
case 1337:
case 2958:
case 574:
case 3836:
case 1041:
case 1259:
case 3514:
case 1862:
case 1683:
case 2819:
case 1579:
case 1915:
case 2640:
case 927:
case 3931:
case 3508:
case 1172:
case 355:
case 3634:
case 2331:
case 3556:
case 3250:
case 3203:
case 3704:
case 795:
case 2624:
case 1723:
case 3276:
case 643:
case 3570:
case 3718:
case 327:
case 2588:
case 3051:
case 71:
case 1013:
case 3028:
case 1457:
case 998:
case 1188:
case 2252:
case 1652:
case 2869:
case 2801:
case 1812:
case 2047:
case 930:
case 2386:
case 2038:
case 1537:
case 3689:
case 3754:
case 1096:
case 3253:
case 3200:
case 3506:
case 109:
case 15:
case 3847:
case 3001:
case 3069:
case 3573:
case 2964:
case 1720:
case 2225:
case 134:
case 1625:
case 2148:
case 21:
case 3308:
case 1379:
case 57:
case 2419:
case 2137:
case 3165:
case 343:
case 3235:
case 522:
case 1732:
case 478:
case 813:
case 3127:
case 2202:
case 2611:
case 3766:
case 3090:
case 2606:
case 3884:
case 1665:
case 968:
case 822:
case 2265:
case 3237:
case 2589:
case 4:
case 1500:
case 120:
case 260:
case 32:
case 2736:
case 1422:
case 3248:
case 3125:
case 3291:
case 1627:
case 2227:
case 3102:
case 2466:
case 2342:
case 906:
case 1085:
case 2135:
case 1952:
case 87:
case 1273:
case 1394:
case 1774:
case 3845:
case 301:
case 2893:
case 3340:
case 2868:
case 2100:
case 1535:
case 3359:
case 1044:
case 2781:
case 781:
case 461:
case 2092:
case 765:
case 281:
case 2534:
case 265:
case 4088:
case 433:
case 2816:
case 3068:
case 2829:
case 2911:
case 1902:
case 1576:
case 601:
case 3892:
case 3152:
case 1455:
case 2103:
case 2150:
case 746:
case 1134:
case 1741:
case 2395:
case 3989:
case 3672:
case 1763:
case 1264:
case 2418:
case 4072:
case 62:
case 480:
case 1378:
case 539:
case 773:
case 3309:
case 2149:
case 3423:
case 3380:
case 117:
case 2378:
case 3552:
case 66:
case 2798:
case 3885:
case 2264:
case 2763:
case 3900:
case 3953:
case 1775:
case 2741:
case 2433:
case 1890:
case 1150:
case 1103:
case 2455:
case 3935:
case 2576:
case 1670:
case 1829:
case 2902:
case 3844:
case 2256:
case 2925:
case 896:
case 2550:
case 1816:
case 225:
case 3757:
case 1534:
case 3976:
case 421:
case 3502:
case 2044:
case 397:
case 3383:
case 2189:
case 2430:
case 3525:
case 3871:
case 1039:
case 3950:
case 3903:
case 4037:
case 2952:
case 2774:
case 3432:
case 566:
case 459:
case 3111:
case 2627:
case 3707:
case 160:
case 1736:
case 36:
case 1589:
case 3637:
case 3499:
case 2553:
case 508:
case 1606:
case 2665:
case 3762:
case 862:
case 1202:
case 2602:
case 1970:
case 1611:
case 808:
case 2667:
case 840:
case 3474:
case 3106:
case 2799:
case 2346:
case 2379:
case 667:
case 1956:
case 1225:
case 2625:
case 1148:
case 2407:
case 2720:
case 69:
case 4000:
case 4053:
case 2591:
case 3527:
case 853:
case 689:
case 3012:
case 3460:
case 3565:
case 2537:
case 845:
case 3170:
case 1038:
case 1386:
case 2812:
case 1047:
case 75:
case 1973:
case 1869:
case 2652:
case 474:
case 1572:
case 3948:
case 3164:
case 1397:
case 3463:
case 367:
case 4003:
case 1624:
case 3650:
case 1331:
case 4076:
case 4049:
case 3315:
case 407:
case 3887:
case 2969:
case 2538:
case 3740:
case 1912:
case 2901:
case 648:
case 2547:
case 2381:
case 2072:
case 3528:
case 417:
case 854:
case 2806:
case 481:
case 2408:
case 1147:
case 465:
case 2088:
case 3070:
case 2668:
case 1268:
case 1293:
case 3056:
case 83:
case 3326:
case 993:
case 2414:
case 332:
case 3645:
case 605:
case 3888:
case 632:
case 2795:
case 3692:
case 1415:
case 2951:
case 952:
case 2629:
case 1229:
case 3743:
case 3431:
case 3244:
case 3709:
case 733:
case 1510:
case 579:
case 2856:
case 537:
case 3761:
case 2421:
case 3497:
case 1398:
case 4092:
case 473:
case 2458:
case 2864:
case 2187:
case 3872:
case 1048:
case 1290:
case 2928:
case 3486:
case 3758:
case 2185:
case 3011:
case 3529:
case 495:
case 1544:
case 1035:
case 2786:
case 3516:
case 518:
case 3210:
case 963:
case 351:
case 2443:
case 837:
case 3304:
case 1192:
case 2669:
case 329:
case 1417:
case 1139:
case 1053:
case 1000:
case 3296:
case 2089:
case 1323:
case 3590:
case 1480:
case 1746:
case 53:
case 174:
case 3647:
case 629:
case 3708:
case 438:
case 1145:
case 1228:
case 2628:
case 4047:
case 3213:
case 1332:
case 3889:
case 336:
case 778:
case 1802:
case 2811:
case 1251:
case 651:
case 1076:
case 2440:
case 554:
case 3593:
case 2916:
case 2034:
case 1571:
case 886:
case 2825:
case 2571:
case 687:
case 1545:
case 2184:
case 947:
case 1440:
case 2076:
case 2049:
case 2251:
case 3944:
case 207:
case 2802:
case 1929:
case 3168:
case 3853:
case 3800:
case 3494:
case 3613:
case 3305:
case 2228:
case 274:
case 3238:
case 514:
case 2399:
case 2746:
case 1409:
case 2053:
case 3696:
case 2417:
case 1377:
case 369:
case 311:
case 2852:
case 1669:
case 2201:
case 1601:
case 409:
case 2585:
case 3715:
case 2192:
case 1212:
case 1144:
case 1443:
case 1731:
case 923:
case 503:
case 3025:
case 3190:
case 3610:
case 3803:
case 3850:
case 3849:
case 3067:
case 387:
case 434:
case 94:
case 1928:
case 2037:
case 2290:
case 259:
case 1458:
case 2782:
case 3685:
case 803:
case 3512:
case 3027:
case 420:
case 68:
case 912:
case 699:
case 2778:
case 2398:
case 119:
case 161:
case 221:
case 1421:
case 3239:
case 2587:
case 185:
case 1196:
case 2216:
case 4044:
case 541:
case 984:
case 1870:
case 3644:
case 1375:
case 3101:
case 2415:
case 3169:
case 457:
case 3128:
case 3245:
case 3910:
case 2293:
case 2374:
case 1693:
case 1113:
case 1414:
case 1668:
case 2268:
case 3987:
case 2138:
case 3307:
case 1088:
case 1408:
case 4071:
case 399:
case 882:
case 2865:
case 3837:
case 1072:
case 38:
case 3996:
case 2360:
case 3848:
case 1381:
case 3891:
case 2827:
case 586:
case 1969:
case 1873:
case 4023:
case 2703:
case 2750:
case 2204:
case 1604:
case 1734:
case 612:
case 1141:
case 277:
case 239:
case 1618:
case 1464:
case 2749:
case 3960:
case 3623:
case 713:
case 1575:
case 1821:
case 1456:
case 2907:
case 192:
case 2046:
case 2310:
case 2655:
case 2598:
case 1926:
case 3974:
case 2563:
case 2815:
case 2387:
case 3507:
case 2630:
case 1536:
case 2254:
case 1789:
case 2574:
case 3879:
case 479:
case 1160:
case 3015:
case 2181:
case 384:
case 3437:
case 2957:
case 2465:
case 4032:
case 108:
case 2622:
case 1347:
case 312:
case 546:
case 2266:
case 895:
case 1581:
case 1473:
case 3126:
case 3767:
case 1174:
case 226:
case 2735:
case 3632:
case 595:
case 647:
case 1207:
case 2748:
case 846:
case 2425:
case 1859:
case 1619:
case 1199:
case 2219:
case 2737:
case 316:
case 1132:
case 860:
case 1840:
case 1626:
case 987:
case 2226:
case 2791:
case 2371:
case 1345:
case 222:
case 873:
case 911:
case 3080:
case 3894:
case 2933:
case 2078:
case 3522:
case 3281:
case 3505:
case 1095:
case 3923:
case 3660:
case 1120:
case 1918:
case 1384:
case 1861:
case 1257:
case 3878:
case 2657:
case 590:
case 3932:
case 1788:
case 2452:
case 538:
case 1966:
case 881:
case 4063:
case 3641:
case 1954:
case 722:
case 454:
case 3104:
case 3403:
case 3450:
case 2930:
case 3449:
case 623:
case 1123:
case 1424:
case 3663:
case 2177:
case 3920:
case 1339:
case 3698:
case 3118:
case 4075:
case 331:
case 3263:
case 2123:
case 3316:
case 1344:
case 482:
case 3434:
case 1523:
case 2843:
case 1905:
case 2788:
case 3155:
case 296:
case 375:
case 2042:
case 1880:
case 656:
case 1922:
case 2861:
case 857:
case 2918:
case 3043:
case 3977:
case 675:
case 3566:
case 2904:
case 796:
case 55:
case 929:
case 3009:
case 1933:
case 2345:
case 3105:
case 4036:
case 3393:
case 3773:
case 820:
case 2626:
case 1226:
case 1955:
case 3368:
case 1520:
case 403:
case 2132:
case 2199:
case 2619:
case 3554:
case 1662:
case 2859:
case 951:
case 3706:
case 1883:
case 1748:
case 1425:
case 17:
case 834:
case 3232:
case 266:
case 3711:
case 2666:
case 2581:
case 1560:
case 3107:
case 1622:
case 948:
case 1957:
case 3162:
case 113:
case 2086:
case 3299:
case 900:
case 1181:
case 745:
case 2808:
case 441:
case 809:
case 3526:
case 1700:
case 1753:
case 3519:
case 1254:
case 792:
case 2789:
case 2536:
case 3351:
case 1630:
case 1815:
case 1563:
case 1387:
case 1598:
case 1310:
case 557:
case 292:
case 1079:
case 1046:
case 932:
case 3936:
case 2456:
case 3014:
case 3157:
case 1962:
case 652:
case 2575:
case 2919:
case 1749:
case 3724:
case 2464:
case 3677:
case 708:
case 2618:
case 2233:
case 2141:
case 388:
case 3301:
case 3472:
case 1175:
case 1703:
case 3886:
case 486:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1756551601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,];
var gg_b = "1756551601/";

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
