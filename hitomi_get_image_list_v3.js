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
case 835:
case 2813:
case 3128:
case 2449:
case 792:
case 2046:
case 4036:
case 2385:
case 488:
case 3495:
case 1242:
case 1937:
case 1118:
case 3151:
case 1483:
case 2073:
case 3286:
case 16:
case 1803:
case 326:
case 4094:
case 3500:
case 1189:
case 3204:
case 1682:
case 3131:
case 2176:
case 1485:
case 1957:
case 2663:
case 1805:
case 3646:
case 2520:
case 3470:
case 476:
case 569:
case 1712:
case 2224:
case 3690:
case 547:
case 2702:
case 618:
case 1254:
case 227:
case 2927:
case 634:
case 2092:
case 2143:
case 119:
case 842:
case 2460:
case 3065:
case 2383:
case 1237:
case 1732:
case 3073:
case 2199:
case 3700:
case 696:
case 1158:
case 2692:
case 1279:
case 3462:
case 1823:
case 3090:
case 944:
case 1512:
case 456:
case 2720:
case 876:
case 2151:
case 722:
case 3046:
case 78:
case 1370:
case 4071:
case 3108:
case 831:
case 1750:
case 790:
case 3385:
case 3522:
case 2472:
case 1934:
case 218:
case 1082:
case 2128:
case 627:
case 1393:
case 433:
case 2722:
case 297:
case 2065:
case 2907:
case 1954:
case 2166:
case 4016:
case 3383:
case 2673:
case 3815:
case 327:
case 1940:
case 3176:
case 3663:
case 3520:
case 2470:
case 2924:
case 226:
case 144:
case 3841:
case 1257:
case 2204:
case 1752:
case 1372:
case 1972:
case 3192:
case 2856:
case 11:
case 2611:
case 172:
case 1788:
case 2434:
case 2165:
case 1317:
case 3651:
case 3816:
case 2781:
case 741:
case 1995:
case 3076:
case 1340:
case 4041:
case 2894:
case 3437:
case 1180:
case 2608:
case 823:
case 3509:
case 3983:
case 2307:
case 1354:
case 421:
case 2442:
case 237:
case 3479:
case 1826:
case 624:
case 1601:
case 2417:
case 854:
case 1993:
case 294:
case 474:
case 3173:
case 1868:
case 3666:
case 1334:
case 671:
case 169:
case 2643:
case 2099:
case 2496:
case 730:
case 3457:
case 891:
case 3190:
case 2709:
case 519:
case 1719:
case 3146:
case 3008:
case 1260:
case 1577:
case 3386:
case 1182:
case 208:
case 2028:
case 2454:
case 3871:
case 2836:
case 454:
case 874:
case 3442:
case 3307:
case 268:
case 2628:
case 3529:
case 651:
case 1295:
case 375:
case 1314:
case 425:
case 694:
case 1486:
case 2175:
case 2076:
case 1621:
case 3894:
case 1806:
case 236:
case 3469:
case 3781:
case 1:
case 4055:
case 2304:
case 1764:
case 1357:
case 952:
case 1272:
case 4033:
case 109:
case 3434:
case 3598:
case 1739:
case 3066:
case 3165:
case 2798:
case 1379:
case 3836:
case 50:
case 1791:
case 2581:
case 2045:
case 2008:
case 2146:
case 909:
case 3163:
case 1427:
case 2414:
case 1878:
case 2457:
case 544:
case 1884:
case 146:
case 2173:
case 373:
case 1270:
case 2666:
case 895:
case 255:
case 1772:
case 3410:
case 1277:
case 1988:
case 192:
case 1239:
case 3865:
case 3055:
case 3156:
case 2197:
case 2585:
case 1330:
case 391:
case 3447:
case 1420:
case 2635:
case 3783:
case 3194:
case 2432:
case 1005:
case 1967:
case 2653:
case 1048:
case 475:
case 541:
case 2875:
case 623:
case 473:
case 494:
case 3615:
case 2633:
case 2452:
case 868:
case 3161:
case 3785:
case 2229:
case 871:
case 1562:
case 451:
case 1770:
case 323:
case 2320:
case 2171:
case 1919:
case 2013:
case 992:
case 1259:
case 1422:
case 1332:
case 1549:
case 719:
case 2846:
case 873:
case 2783:
case 254:
case 1593:
case 894:
case 321:
case 395:
case 3875:
case 1126:
case 2613:
case 1025:
case 3041:
case 2302:
case 545:
case 2447:
case 1267:
case 851:
case 291:
case 1274:
case 1570:
case 190:
case 1312:
case 2865:
case 2156:
case 122:
case 1288:
case 1964:
case 3197:
case 808:
case 4043:
case 3444:
case 2281:
case 1939:
case 1959:
case 2863:
case 2300:
case 1760:
case 2998:
case 990:
case 589:
case 1605:
case 2053:
case 1991:
case 4045:
case 3171:
case 1402:
case 2035:
case 3430:
case 2641:
case 3655:
case 3229:
case 543:
case 1595:
case 621:
case 3873:
case 2412:
case 393:
case 3583:
case 3890:
case 3452:
case 3633:
case 4011:
case 2161:
case 1310:
case 897:
case 3845:
case 1250:
case 3808:
case 2507:
case 1554:
case 71:
case 2153:
case 1821:
case 3309:
case 2036:
case 592:
case 2135:
case 3071:
case 2464:
case 1244:
case 1087:
case 520:
case 1540:
case 3527:
case 2477:
case 1391:
case 1232:
case 141:
case 4090:
case 3920:
case 356:
case 1517:
case 2616:
case 930:
case 4073:
case 2398:
case 2900:
case 941:
case 3724:
case 3586:
case 3141:
case 1026:
case 1252:
case 1757:
case 2704:
case 3636:
case 3381:
case 1838:
case 1912:
case 496:
case 2902:
case 642:
case 231:
case 3097:
case 2056:
case 3843:
case 1714:
case 2155:
case 3922:
case 2459:
case 2133:
case 4092:
case 3016:
case 3616:
case 3524:
case 1742:
case 2467:
case 3851:
case 3900:
case 3398:
case 932:
case 1557:
case 1103:
case 2656:
case 2200:
case 896:
case 256:
case 2920:
case 3135:
case 2309:
case 1769:
case 1801:
case 1210:
case 1626:
case 1514:
case 388:
case 7:
case 2488:
case 590:
case 418:
case 357:
case 1944:
case 3507:
case 2845:
case 2694:
case 58:
case 434:
case 640:
case 2661:
case 3133:
case 497:
case 2016:
case 1754:
case 1367:
case 2707:
case 2202:
case 4065:
case 3866:
case 1668:
case 3491:
case 657:
case 3902:
case 2419:
case 1740:
case 2843:
case 3056:
case 3222:
case 2141:
case 1889:
case 3704:
case 945:
case 746:
case 3671:
case 1537:
case 2381:
case 2636:
case 1409:
case 376:
case 1105:
case 2724:
case 1006:
case 132:
case 1952:
case 3547:
case 1520:
case 1075:
case 1176:
case 2957:
case 4026:
case 573:
case 1663:
case 2189:
case 3752:
case 3257:
case 793:
case 551:
case 3825:
case 845:
case 3917:
case 2349:
case 2532:
case 3510:
case 30:
case 2544:
case 1143:
case 1092:
case 2240:
case 1460:
case 3395:
case 3940:
case 127:
case 1815:
case 2362:
case 2550:
case 1207:
case 508:
case 2254:
case 2234:
case 889:
case 3969:
case 1108:
case 3121:
case 2269:
case 2101:
case 1522:
case 2360:
case 2552:
case 2979:
case 1111:
case 721:
case 2803:
case 1665:
case 996:
case 795:
case 2747:
case 1090:
case 4068:
case 2118:
case 2937:
case 3823:
case 537:
case 1986:
case 3279:
case 2395:
case 2730:
case 489:
case 3254:
case 3550:
case 3362:
case 1673:
case 1227:
case 1722:
case 197:
case 3240:
case 3544:
case 432:
case 1204:
case 2257:
case 1500:
case 2825:
case 3296:
case 3682:
case 3349:
case 4006:
case 1924:
case 443:
case 2138:
case 3532:
case 3805:
case 1646:
case 2080:
case 2547:
case 841:
case 3712:
case 3217:
case 66:
case 1470:
case 1131:
case 723:
case 3957:
case 3485:
case 3118:
case 3242:
case 2512:
case 830:
case 1720:
case 1151:
case 553:
case 1692:
case 3483:
case 2237:
case 4084:
case 2732:
case 1835:
case 134:
case 3269:
case 4078:
case 536:
case 2934:
case 118:
case 2744:
case 1128:
case 3530:
case 997:
case 1063:
case 1853:
case 2370:
case 2969:
case 3680:
case 2750:
case 1502:
case 151:
case 1051:
case 2369:
case 1709:
case 937:
case 4003:
case 776:
case 975:
case 1861:
case 3404:
case 269:
case 1643:
case 2993:
case 2424:
case 173:
case 2868:
case 1454:
case 1836:
case 2539:
case 3759:
case 108:
case 1028:
case 3379:
case 352:
case 2689:
case 3588:
case 2260:
case 822:
case 1440:
case 3878:
case 731:
case 3427:
case 2577:
case 609:
case 250:
case 890:
case 3337:
case 2719:
case 3764:
case 3357:
case 908:
case 2396:
case 1469:
case 370:
case 788:
case 3:
case 1781:
case 3949:
case 1324:
case 1066:
case 3739:
case 3658:
case 1856:
case 1434:
case 1598:
case 2788:
case 137:
case 2826:
case 175:
case 3089:
case 2601:
case 2774:
case 2354:
case 2767:
case 1307:
case 2262:
case 4048:
case 1442:
case 1894:
case 3621:
case 973:
case 1608:
case 2340:
case 2995:
case 1031:
case 3260:
case 1631:
case 3577:
case 2878:
case 3021:
case 672:
case 1146:
case 2337:
case 936:
case 3342:
case 3539:
case 777:
case 1871:
case 3182:
case 2588:
case 252:
case 892:
case 2001:
case 2379:
case 3058:
case 369:
case 1173:
case 971:
case 3993:
case 953:
case 2884:
case 3369:
case 246:
case 2018:
case 968:
case 1457:
case 669:
case 2621:
case 2962:
case 171:
case 1509:
case 3180:
case 2806:
case 2314:
case 2486:
case 955:
case 1175:
case 756:
case 3340:
case 2295:
case 3601:
case 2089:
case 153:
case 3774:
case 1983:
case 3038:
case 3262:
case 924:
case 3354:
case 2949:
case 1043:
case 3788:
case 1897:
case 422:
case 2764:
case 2272:
case 270:
case 490:
case 647:
case 1816:
case 2350:
case 2562:
case 1909:
case 3168:
case 2003:
case 796:
case 3595:
case 1633:
case 4058:
case 1452:
case 2344:
case 174:
case 2184:
case 193:
case 3023:
case 2291:
case 2332:
case 622:
case 3648:
case 3572:
case 3959:
case 2625:
case 3882:
case 3187:
case 2259:
case 1320:
case 870:
case 3402:
case 8:
case 3347:
case 3991:
case 3603:
case 3964:
case 1892:
case 3288:
case 1197:
case 3977:
case 3312:
case 1981:
case 3939:
case 220:
case 41:
case 2772:
case 2277:
case 472:
case 1444:
case 540:
case 2560:
case 1322:
case 3593:
case 2967:
case 2005:
case 3880:
case 3267:
case 3570:
case 3025:
case 3126:
case 2330:
case 2882:
case 620:
case 2187:
case 577:
case 2991:
case 1136:
case 1035:
case 2402:
case 3919:
case 3332:
case 3291:
case 2219:
case 3549:
case 2648:
case 2959:
case 81:
case 3422:
case 2760:
case 1300:
case 872:
case 1998:
case 4001:
case 452:
case 1929:
case 726:
case 1161:
case 3793:
case 1615:
case 2023:
case 954:
case 1412:
case 446:
case 3770:
case 1785:
case 2762:
case 1302:
case 2126:
case 1613:
case 3330:
case 3795:
case 869:
case 3974:
case 1194:
case 154:
case 1783:
case 3106:
case 3048:
case 3967:
case 1281:
case 3623:
case 2749:
case 718:
case 1410:
case 3772:
case 409:
case 3560:
case 392:
case 3352:
case 3264:
case 28:
case 222:
case 533:
case 542:
case 850:
case 3239:
case 2312:
case 2838:
case 3537:
case 1671:
case 230:
case 645:
case 2912:
case 751:
case 3889:
case 2026:
case 2125:
case 794:
case 3388:
case 773:
case 3717:
case 2339:
case 3006:
case 343:
case 3212:
case 1094:
case 2542:
case 3367:
case 708:
case 3374:
case 2684:
case 988:
case 1133:
case 419:
case 3740:
case 1056:
case 1222:
case 2714:
case 389:
case 957:
case 1727:
case 3668:
case 1866:
case 1902:
case 131:
case 1491:
case 2540:
case 1828:
case 3626:
case 188:
case 1036:
case 140:
case 1135:
case 3950:
case 3481:
case 2606:
case 689:
case 931:
case 3944:
case 1329:
case 1061:
case 1900:
case 2779:
case 46:
case 2517:
case 844:
case 2123:
case 3818:
case 3247:
case 3932:
case 2947:
case 241:
case 2232:
case 2068:
case 2737:
case 595:
case 3319:
case 1786:
case 521:
case 643:
case 3557:
case 1843:
case 3569:
case 1016:
case 2754:
case 1115:
case 1202:
case 2374:
case 1922:
case 3498:
case 40:
case 177:
case 3230:
case 1876:
case 3678:
case 232:
case 2388:
case 2952:
case 243:
case 2105:
case 1724:
case 444:
case 2006:
case 3339:
case 2717:
case 4080:
case 3838:
case 1636:
case 3912:
case 330:
case 2687:
case 2889:
case 3377:
case 3364:
case 3252:
case 724:
case 2319:
case 3737:
case 3068:
case 1920:
case 156:
case 3596:
case 245:
case 1474:
case 768:
case 3517:
case 2742:
case 525:
case 2932:
case 1467:
case 3554:
case 2734:
case 2944:
case 819:
case 3540:
case 736:
case 2801:
case 1527:
case 2514:
case 1113:
case 2950:
case 2644:
case 2895:
case 704:
case 3226:
case 1994:
case 984:
case 3174:
case 3167:
case 3906:
case 2650:
case 3780:
case 1355:
case 4057:
case 2325:
case 1956:
case 482:
case 3413:
case 42:
case 3030:
case 1216:
case 1002:
case 210:
case 3849:
case 74:
case 2632:
case 3305:
case 2139:
case 1297:
case 2582:
case 561:
case 1792:
case 1271:
case 3415:
case 1565:
case 3287:
case 3782:
case 3044:
case 89:
case 3978:
case 2433:
case 1198:
case 2278:
case 3860:
case 3050:
case 3119:
case 612:
case 1936:
case 2893:
case 1335:
case 505:
case 1790:
case 2580:
case 4037:
case 2968:
case 3441:
case 2630:
case 1425:
case 1000:
case 4079:
case 1622:
case 3032:
case 3268:
case 1353:
case 2870:
case 2348:
case 1916:
case 49:
case 448:
case 1256:
case 1600:
case 212:
case 3872:
case 3164:
case 2030:
case 3177:
case 1341:
case 3435:
case 2647:
case 1546:
case 2849:
case 913:
case 3650:
case 3926:
case 1403:
case 3644:
case 3895:
case 2862:
case 2906:
case 2167:
case 501:
case 839:
case 1885:
case 2268:
case 1448:
case 3870:
case 1602:
case 3284:
case 3630:
case 915:
case 716:
case 3278:
case 2303:
case 1763:
case 563:
case 2860:
case 82:
case 882:
case 2612:
case 2415:
case 3323:
case 35:
case 3159:
case 2287:
case 764:
case 3652:
case 3010:
case 362:
case 2589:
case 2378:
case 2758:
case 511:
case 2837:
case 2132:
case 4093:
case 1406:
case 4070:
case 1009:
case 3718:
case 1120:
case 785:
case 2677:
case 1576:
case 3456:
case 3368:
case 2721:
case 2150:
case 161:
case 3869:
case 3667:
case 3674:
case 1235:
case 2144:
case 600:
case 1728:
case 899:
case 1543:
case 3059:
case 178:
case 259:
case 3039:
case 1766:
case 2306:
case 961:
case 2088:
case 1122:
case 1255:
case 1478:
case 3077:
case 1233:
case 3326:
case 1508:
case 3854:
case 300:
case 3436:
case 3817:
case 2691:
case 3205:
case 3112:
case 3248:
case 1731:
case 3925:
case 3896:
case 1698:
case 3558:
case 3461:
case 1804:
case 2857:
case 1484:
case 767:
case 2738:
case 2067:
case 1316:
case 2948:
case 186:
case 1566:
case 2869:
case 4060:
case 2110:
case 1361:
case 1213:
case 3144:
case 829:
case 2834:
case 958:
case 2368:
case 1745:
case 3150:
case 2718:
case 2147:
case 1681:
case 1336:
case 2842:
case 3223:
case 2387:
case 1531:
case 3664:
case 3589:
case 2688:
case 1100:
case 3758:
case 2923:
case 2538:
case 3639:
case 2494:
case 3132:
case 2789:
case 1599:
case 660:
case 3659:
case 738:
case 3948:
case 3067:
case 3905:
case 3738:
case 3074:
case 4062:
case 1468:
case 2112:
case 101:
case 1551:
case 1356:
case 766:
case 3130:
case 2077:
case 965:
case 1487:
case 2326:
case 1807:
case 2854:
case 1609:
case 200:
case 2521:
case 3471:
case 4049:
case 2039:
case 163:
case 302:
case 158:
case 1528:
case 1999:
case 2958:
case 506:
case 3672:
case 2649:
case 585:
case 3505:
case 3723:
case 2218:
case 3832:
case 1480:
case 711:
case 1800:
case 1363:
case 1211:
case 2810:
case 3695:
case 2201:
case 3844:
case 1713:
case 917:
case 1555:
case 4019:
case 2662:
case 800:
case 1208:
case 3850:
case 1683:
case 3060:
case 3492:
case 198:
case 1928:
case 1533:
case 2134:
case 1715:
case 1107:
case 1553:
case 1802:
case 3830:
case 402:
case 2072:
case 229:
case 2140:
case 1685:
case 94:
case 3114:
case 549:
case 2380:
case 1535:
case 3670:
case 3446:
case 3490:
case 904:
case 3852:
case 2289:
case 3989:
case 2117:
case 2748:
case 2705:
case 1365:
case 3473:
case 4074:
case 2850:
case 3465:
case 2901:
case 2060:
case 3134:
case 4059:
case 2695:
case 3810:
case 128:
case 3201:
case 1735:
case 4091:
case 1945:
case 1390:
case 1908:
case 3169:
case 964:
case 2832:
case 1186:
case 2179:
case 1911:
case 3958:
case 3382:
case 2723:
case 2505:
case 2548:
case 1251:
case 3142:
case 715:
case 916:
case 33:
case 1231:
case 3705:
case 3748:
case 1083:
case 3812:
case 116:
case 2238:
case 3095:
case 1976:
case 2725:
case 514:
case 3289:
case 1822:
case 329:
case 1127:
case 2114:
case 1513:
case 2670:
case 3380:
case 400:
case 4039:
case 2693:
case 164:
case 928:
case 2830:
case 566:
case 479:
case 1733:
case 3072:
case 859:
case 299:
case 1343:
case 2411:
case 703:
case 1183:
case 1794:
case 3706:
case 1418:
case 4012:
case 3451:
case 2867:
case 3568:
case 2669:
case 2057:
case 967:
case 2726:
case 3195:
case 185:
case 1975:
case 1027:
case 2014:
case 1756:
case 3587:
case 3040:
case 22:
case 410:
case 1265:
case 598:
case 3839:
case 2149:
case 3054:
case 3338:
case 1401:
case 39:
case 1992:
case 2578:
case 3679:
case 348:
case 2389:
case 3466:
case 1624:
case 2819:
case 3891:
case 45:
case 3358:
case 3778:
case 1311:
case 2443:
case 4010:
case 1597:
case 2787:
case 69:
case 1946:
case 3069:
case 3321:
case 4047:
case 3170:
case 1345:
case 3431:
case 2476:
case 1185:
case 1489:
case 3193:
case 906:
case 2654:
case 1809:
case 280:
case 966:
case 765:
case 3642:
case 2054:
case 528:
case 1965:
case 1716:
case 3149:
case 85:
case 107:
case 2864:
case 3389:
case 412:
case 2679:
case 2428:
case 3014:
case 3888:
case 1292:
case 382:
case 32:
case 4030:
case 1797:
case 3445:
case 2839:
case 2637:
case 2980:
case 2568:
case 3726:
case 3057:
case 2195:
case 1275:
case 339:
case 1561:
case 4052:
case 2017:
case 2706:
case 1328:
case 516:
case 3301:
case 1290:
case 1594:
case 1438:
case 114:
case 3506:
case 3654:
case 639:
case 3037:
case 3476:
case 1829:
case 1627:
case 2431:
case 564:
case 2657:
case 907:
case 1963:
case 1898:
case 166:
case 4050:
case 787:
case 3617:
case 682:
case 3819:
case 758:
case 2358:
case 2034:
case 1399:
case 3443:
case 2778:
case 763:
case 502:
case 3971:
case 1191:
case 1278:
case 1987:
case 1455:
case 1159:
case 3592:
case 15:
case 1433:
case 2198:
case 1652:
case 2271:
case 1323:
case 881:
case 3448:
case 2773:
case 313:
case 3405:
case 73:
case 467:
case 3885:
case 2622:
case 2000:
case 3313:
case 3261:
case 2425:
case 1630:
case 1893:
case 3020:
case 3602:
case 1284:
case 1580:
case 1968:
case 3109:
case 2355:
case 613:
case 2775:
case 1012:
case 406:
case 1206:
case 3294:
case 2423:
case 3573:
case 560:
case 1582:
case 2792:
case 3022:
case 3256:
case 1632:
case 3916:
case 1139:
case 559:
case 2002:
case 866:
case 3546:
case 1872:
case 2563:
case 2956:
case 4027:
case 3341:
case 1177:
case 2575:
case 3425:
case 2602:
case 2020:
case 384:
case 2109:
case 3790:
case 3335:
case 3773:
case 2405:
case 213:
case 1032:
case 414:
case 1984:
case 3353:
case 3961:
case 2885:
case 2592:
case 2236:
case 3271:
case 799:
case 466:
case 579:
case 1612:
case 3936:
case 3746:
case 2763:
case 1860:
case 912:
case 3002:
case 3216:
case 2181:
case 3956:
case 3563:
case 1030:
case 2341:
case 3792:
case 3297:
case 1188:
case 2600:
case 2022:
case 1348:
case 3423:
case 1906:
case 4024:
case 2315:
case 1167:
case 3333:
case 684:
case 1052:
case 1610:
case 2403:
case 2081:
case 2545:
case 3609:
case 2508:
case 3215:
case 3102:
case 55:
case 828:
case 1501:
case 3528:
case 1814:
case 3743:
case 2915:
case 2766:
case 363:
case 1067:
case 286:
case 3599:
case 205:
case 2698:
case 2511:
case 1659:
case 1857:
case 2804:
case 3356:
case 1691:
case 3824:
case 3551:
case 3468:
case 301:
case 3531:
case 3426:
case 1664:
case 3681:
case 3336:
case 2371:
case 2120:
case 160:
case 1837:
case 404:
case 2406:
case 1758:
case 3029:
case 3098:
case 44:
case 3213:
case 1144:
case 2543:
case 510:
case 1416:
case 687:
case 2235:
case 3708:
case 1721:
case 658:
case 1150:
case 2253:
case 261:
case 72:
case 902:
case 1497:
case 2913:
case 3397:
case 3941:
case 2776:
case 3731:
case 962:
case 1925:
case 603:
case 2356:
case 1619:
case 2824:
case 1817:
case 1248:
case 201:
case 1205:
case 416:
case 3316:
case 1789:
case 2599:
case 2241:
case 84:
case 3122:
case 661:
case 3629:
case 3478:
case 2528:
case 1039:
case 263:
case 1854:
case 2807:
case 3508:
case 1521:
case 2102:
case 1077:
case 2955:
case 1064:
case 1326:
case 2487:
case 2935:
case 1368:
case 2745:
case 1091:
case 57:
case 1834:
case 979:
case 780:
case 1110:
case 2213:
case 2361:
case 1701:
case 2098:
case 817:
case 3543:
case 79:
case 2953:
case 2566:
case 1869:
case 1923:
case 303:
case 2711:
case 1203:
case 1688:
case 2100:
case 2029:
case 1387:
case 3576:
case 605:
case 3009:
case 3120:
case 3266:
case 3755:
case 2482:
case 3943:
case 217:
case 1072:
case 2715:
case 75:
case 2107:
case 2553:
case 2802:
case 364:
case 1117:
case 1523:
case 2365:
case 1705:
case 1660:
case 3231:
case 3392:
case 2276:
case 1095:
case 2741:
case 1289:
case 3104:
case 2211:
case 1703:
case 1525:
case 3346:
case 3251:
case 1649:
case 1142:
case 1093:
case 2999:
case 3911:
case 1382:
case 24:
case 298:
case 582:
case 2208:
case 2245:
case 3945:
case 3390:
case 3735:
case 328:
case 3228:
case 710:
case 1810:
case 1852:
case 3931:
case 1157:
case 604:
case 1503:
case 1490:
case 1238:
case 1062:
case 401:
case 216:
case 1473:
case 3124:
case 2083:
case 803:
case 1989:
case 2392:
case 1830:
case 458:
case 2733:
case 317:
case 199:
case 878:
case 3107:
case 3966:
case 264:
case 1693:
case 3535:
case 1446:
case 698:
case 3685:
case 1114:
case 59:
case 617:
case 228:
case 3555:
case 465:
case 1060:
case 3533:
case 2515:
case 712:
case 3683:
case 1850:
case 3245:
case 3208:
case 2820:
case 2911:
case 805:
case 1672:
case 4029:
case 2186:
case 2299:
case 1137:
case 366:
case 3351:
case 1318:
case 2946:
case 3771:
case 2736:
case 3963:
case 3604:
case 2597:
case 1282:
case 3898:
case 1443:
case 3399:
case 92:
case 982:
case 702:
case 3594:
case 2973:
case 1654:
case 1506:
case 2809:
case 2489:
case 1079:
case 2761:
case 3627:
case 3829:
case 939:
case 53:
case 1037:
case 3273:
case 2308:
case 2990:
case 1057:
case 1726:
case 760:
case 285:
case 2975:
case 1874:
case 2418:
case 381:
case 813:
case 3024:
case 1634:
case 139:
case 3561:
case 307:
case 2401:
case 1578:
case 1389:
case 759:
case 1149:
case 2881:
case 2265:
case 2571:
case 2376:
case 3797:
case 182:
case 3292:
case 1888:
case 1614:
case 2829:
case 2627:
case 1431:
case 3086:
case 3185:
case 383:
case 3345:
case 3308:
case 1170:
case 3973:
case 2438:
case 413:
case 1042:
case 3809:
case 685:
case 606:
case 2328:
case 238:
case 367:
case 1358:
case 1982:
case 3263:
case 1466:
case 2246:
case 1891:
case 3624:
case 3516:
case 779:
case 599:
case 1069:
case 3736:
case 3946:
case 2771:
case 99:
case 2604:
case 2963:
case 2898:
case 700:
case 1839:
case 2536:
case 649:
case 1637:
case 3571:
case 2421:
case 2331:
case 2686:
case 2797:
case 3376:
case 3992:
case 1864:
case 1877:
case 180:
case 2007:
case 1054:
case 2716:
case 2024:
case 1499:
case 1096:
case 385:
case 3418:
case 884:
case 1451:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1762462802/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,];
var gg_b = "1762462802/";

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
