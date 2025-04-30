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
case 6:
case 1396:
case 2602:
case 548:
case 3309:
case 3972:
case 1312:
case 1742:
case 319:
case 517:
case 559:
case 3449:
case 4060:
case 3640:
case 3872:
case 782:
case 1496:
case 1702:
case 522:
case 3719:
case 2870:
case 2642:
case 3687:
case 1586:
case 566:
case 451:
case 1412:
case 1157:
case 1438:
case 1377:
case 4036:
case 3694:
case 1862:
case 1523:
case 1793:
case 2991:
case 2049:
case 1100:
case 969:
case 3331:
case 2119:
case 1293:
case 535:
case 252:
case 4059:
case 3564:
case 3920:
case 956:
case 760:
case 279:
case 3548:
case 3431:
case 1556:
case 156:
case 47:
case 3766:
case 5:
case 773:
case 375:
case 202:
case 2130:
case 3813:
case 3653:
case 2509:
case 3865:
case 846:
case 906:
case 1754:
case 3611:
case 659:
case 2105:
case 617:
case 1888:
case 1254:
case 638:
case 3965:
case 3008:
case 2567:
case 1797:
case 3951:
case 2814:
case 325:
case 2654:
case 2549:
case 42:
case 622:
case 3266:
case 1039:
case 836:
case 2464:
case 1153:
case 1975:
case 2676:
case 414:
case 2448:
case 3906:
case 3363:
case 1086:
case 1424:
case 1999:
case 401:
case 1858:
case 3230:
case 1276:
case 1284:
case 3415:
case 865:
case 881:
case 3946:
case 410:
case 2166:
case 2364:
case 3981:
case 328:
case 307:
case 1126:
case 2718:
case 2348:
case 3245:
case 1875:
case 3004:
case 3281:
case 1258:
case 2113:
case 664:
case 834:
case 2818:
case 2832:
case 2490:
case 900:
case 1529:
case 2151:
case 3416:
case 398:
case 844:
case 2932:
case 111:
case 2507:
case 1085:
case 904:
case 3905:
case 911:
case 388:
case 104:
case 830:
case 660:
case 2675:
case 1299:
case 3114:
case 1758:
case 3316:
case 3781:
case 2003:
case 709:
case 1884:
case 3421:
case 3206:
case 3044:
case 4053:
case 3251:
case 1078:
case 2092:
case 573:
case 7:
case 2550:
case 2368:
case 2016:
case 1328:
case 49:
case 692:
case 3966:
case 395:
case 14:
case 416:
case 2304:
case 1055:
case 3343:
case 2468:
case 3713:
case 783:
case 3866:
case 48:
case 1061:
case 1788:
case 1997:
case 3403:
case 2021:
case 1614:
case 4083:
case 3765:
case 4087:
case 3369:
case 1555:
case 2662:
case 3407:
case 3380:
case 1993:
case 745:
case 343:
case 2222:
case 4040:
case 289:
case 1159:
case 3689:
case 3220:
case 1762:
case 1578:
case 3307:
case 333:
case 2050:
case 1691:
case 3217:
case 3590:
case 560:
case 3447:
case 4035:
case 1334:
case 3052:
case 2722:
case 673:
case 1802:
case 203:
case 2120:
case 2007:
case 772:
case 1942:
case 3568:
case 748:
case 154:
case 1189:
case 1495:
case 3122:
case 2503:
case 759:
case 717:
case 3819:
case 1160:
case 3544:
case 3571:
case 738:
case 2543:
case 2080:
case 3698:
case 1537:
case 722:
case 623:
case 2117:
case 766:
case 3082:
case 4094:
case 1029:
case 1395:
case 3272:
case 3636:
case 2820:
case 2508:
case 1102:
case 527:
case 329:
case 2694:
case 3067:
case 3822:
case 2331:
case 3991:
case 1294:
case 3119:
case 1860:
case 787:
case 1257:
case 1096:
case 352:
case 3891:
case 797:
case 1794:
case 1960:
case 3693:
case 76:
case 2817:
case 577:
case 1524:
case 2920:
case 463:
case 1012:
case 1142:
case 2431:
case 2467:
case 505:
case 3970:
case 1310:
case 1936:
case 3602:
case 1859:
case 1619:
case 2449:
case 1427:
case 2600:
case 2872:
case 1287:
case 2640:
case 1898:
case 1959:
case 1077:
case 2409:
case 2367:
case 1836:
case 3642:
case 3870:
case 1240:
case 1327:
case 2719:
case 856:
case 3308:
case 2205:
case 627:
case 278:
case 3464:
case 608:
case 3218:
case 3232:
case 2315:
case 2745:
case 3676:
case 2363:
case 2906:
case 496:
case 146:
case 1073:
case 2230:
case 806:
case 1283:
case 1339:
case 232:
case 555:
case 2806:
case 2415:
case 4088:
case 41:
case 1783:
case 2730:
case 1645:
case 3408:
case 968:
case 315:
case 207:
case 936:
case 2705:
case 1356:
case 3718:
case 2463:
case 2245:
case 1176:
case 275:
case 4075:
case 3130:
case 3509:
case 1825:
case 3697:
case 2118:
case 2132:
case 1024:
case 337:
case 1512:
case 1538:
case 2965:
case 4058:
case 181:
case 1753:
case 3015:
case 318:
case 981:
case 1474:
case 549:
case 3814:
case 225:
case 474:
case 1341:
case 431:
case 1925:
case 2913:
case 1184:
case 1386:
case 934:
case 3092:
case 971:
case 1926:
case 2251:
case 1853:
case 1613:
case 3404:
case 171:
case 3368:
case 2443:
case 2090:
case 3016:
case 1651:
case 140:
case 295:
case 3146:
case 1665:
case 490:
case 2966:
case 2303:
case 2713:
case 3468:
case 1911:
case 144:
case 804:
case 944:
case 1485:
case 749:
case 1826:
case 3021:
case 0:
case 921:
case 1337:
case 3444:
case 1175:
case 4054:
case 3569:
case 2706:
case 1646:
case 3818:
case 10:
case 1681:
case 2416:
case 2805:
case 1188:
case 3490:
case 90:
case 2582:
case 3547:
case 353:
case 3507:
case 755:
case 3699:
case 3918:
case 1461:
case 1378:
case 1455:
case 2905:
case 288:
case 1606:
case 1983:
case 2781:
case 66:
case 83:
case 1028:
case 3675:
case 2930:
case 2114:
case 462:
case 2316:
case 3003:
case 2421:
case 3007:
case 4093:
case 1259:
case 1162:
case 1798:
case 2772:
case 2568:
case 1987:
case 2350:
case 2122:
case 1800:
case 2819:
case 2659:
case 2544:
case 3503:
case 3770:
case 2571:
case 2450:
case 2191:
case 3069:
case 1236:
case 3080:
case 3117:
case 15:
case 1935:
case 1887:
case 2272:
case 1759:
case 95:
case 2082:
case 1260:
case 3662:
case 708:
case 1894:
case 727:
case 4042:
case 2369:
case 854:
case 1333:
case 3222:
case 3791:
case 2407:
case 2380:
case 243:
case 3521:
case 389:
case 2689:
case 1329:
case 2480:
case 233:
case 399:
case 2469:
case 2217:
case 597:
case 613:
case 712:
case 777:
case 2590:
case 2447:
case 3482:
case 1994:
case 3516:
case 850:
case 3291:
case 1617:
case 1857:
case 2810:
case 3896:
case 2927:
case 1472:
case 3525:
case 457:
case 3838:
case 3812:
case 1250:
case 3795:
case 2359:
case 3129:
case 1182:
case 2436:
case 504:
case 2398:
case 351:
case 3912:
case 1372:
case 1867:
case 2910:
case 1909:
case 3060:
case 2229:
case 3877:
case 1633:
case 654:
case 2669:
case 3362:
case 1629:
case 54:
case 2233:
case 1831:
case 3734:
case 1152:
case 1417:
case 2558:
case 2733:
case 3462:
case 813:
case 2599:
case 1769:
case 263:
case 2460:
case 3059:
case 923:
case 2575:
case 2489:
case 53:
case 2801:
case 3668:
case 4048:
case 3228:
case 2099:
case 2941:
case 1743:
case 964:
case 241:
case 769:
case 4064:
case 3559:
case 224:
case 3644:
case 600:
case 270:
case 3388:
case 3178:
case 231:
case 3598:
case 274:
case 1413:
case 604:
case 611:
case 2237:
case 425:
case 1570:
case 1451:
case 1190:
case 4008:
case 160:
case 2841:
case 554:
case 3924:
case 301:
case 3499:
case 1661:
case 1168:
case 2562:
case 1655:
case 2823:
case 314:
case 2956:
case 2778:
case 1406:
case 192:
case 2128:
case 3475:
case 887:
case 1522:
case 1863:
case 478:
case 2839:
case 3358:
case 1144:
case 2621:
case 1306:
case 1591:
case 182:
case 1171:
case 1678:
case 3399:
case 982:
case 1446:
case 3137:
case 21:
case 310:
case 3824:
case 1481:
case 2616:
case 1721:
case 2278:
case 86:
case 1915:
case 432:
case 2088:
case 3690:
case 1292:
case 286:
case 2239:
case 754:
case 3101:
case 1916:
case 3594:
case 3174:
case 1330:
case 808:
case 172:
case 1263:
case 827:
case 3608:
case 948:
case 1639:
case 606:
case 159:
case 1821:
case 2223:
case 117:
case 2054:
case 3724:
case 959:
case 2663:
case 917:
case 1305:
case 4004:
case 2097:
case 2878:
case 4044:
case 2723:
case 226:
case 1892:
case 812:
case 138:
case 3476:
case 262:
case 2483:
case 2955:
case 1656:
case 1816:
case 166:
case 4068:
case 1763:
case 877:
case 3141:
case 3557:
case 966:
case 750:
case 2593:
case 122:
case 2173:
case 495:
case 2353:
case 3397:
case 1601:
case 3123:
case 1674:
case 2311:
case 3828:
case 3454:
case 2786:
case 2201:
case 2084:
case 367:
case 2286:
case 935:
case 1843:
case 2774:
case 1366:
case 3497:
case 1903:
case 2453:
case 2701:
case 556:
case 280:
case 38:
case 485:
case 1018:
case 1032:
case 3156:
case 294:
case 3354:
case 3587:
case 316:
case 2411:
case 2542:
case 3934:
case 1869:
case 2196:
case 2576:
case 1880:
case 1:
case 3040:
case 2833:
case 3493:
case 2112:
case 1907:
case 2138:
case 193:
case 506:
case 993:
case 3277:
case 2829:
case 4052:
case 183:
case 2494:
case 3777:
case 983:
case 1969:
case 3834:
case 1980:
case 3553:
case 2597:
case 3302:
case 2177:
case 2609:
case 1850:
case 3238:
case 1610:
case 3442:
case 839:
case 3979:
case 700:
case 2093:
case 3296:
case 1709:
case 704:
case 2435:
case 4082:
case 3879:
case 1249:
case 2227:
case 3796:
case 3402:
case 1267:
case 656:
case 109:
case 3895:
case 1627:
case 2649:
case 849:
case 909:
case 2400:
case 3712:
case 571:
case 2098:
case 3680:
case 2877:
case 2362:
case 1150:
case 3389:
case 3233:
case 2036:
case 4067:
case 540:
case 2682:
case 1546:
case 3558:
case 1391:
case 3733:
case 2462:
case 1506:
case 781:
case 3599:
case 2977:
case 2059:
case 1782:
case 3460:
case 530:
case 65:
case 3489:
case 3195:
case 3927:
case 1169:
case 3498:
case 1180:
case 3359:
case 1017:
case 1565:
case 2812:
case 746:
case 1147:
case 1020:
case 251:
case 768:
case 2089:
case 1370:
case 3827:
case 1695:
case 2996:
case 736:
case 3459:
case 864:
case 2499:
case 2185:
case 1808:
case 1520:
case 2924:
case 3562:
case 214:
case 3823:
case 3778:
case 3956:
case 396:
case 3261:
case 3128:
case 3255:
case 2358:
case 1964:
case 1790:
case 3839:
case 1103:
case 1143:
case 3755:
case 1013:
case 644:
case 2824:
case 1065:
case 2137:
case 1908:
case 210:
case 2690:
case 3088:
case 386:
case 1051:
case 3278:
case 860:
case 2375:
case 3801:
case 2668:
case 1006:
case 1704:
case 3986:
case 437:
case 3099:
case 2973:
case 2228:
case 1771:
case 3941:
case 1121:
case 2559:
case 2644:
case 324:
case 1268:
case 3737:
case 370:
case 3285:
case 987:
case 402:
case 60:
case 1628:
case 447:
case 882:
case 1768:
case 331:
case 197:
case 2598:
case 3643:
case 3237:
case 320:
case 4063:
case 3785:
case 418:
case 1314:
case 1744:
case 3841:
case 1046:
case 1271:
case 2873:
case 3058:
case 3937:
case 3885:
case 390:
case 1115:
case 2123:
case 127:
case 4016:
case 2535:
case 108:
case 817:
case 1904:
case 2500:
case 3311:
case 1971:
case 3741:
case 1844:
case 267:
case 646:
case 3426:
case 2139:
case 4092:
case 112:
case 1871:
case 3076:
case 3286:
case 2083:
case 3453:
case 2540:
case 3774:
case 668:
case 1673:
case 3326:
case 636:
case 28:
case 380:
case 216:
case 1968:
case 3411:
case 2156:
case 394:
case 2376:
case 2594:
case 3615:
case 2174:
case 1990:
case 3239:
case 905:
case 2608:
case 3861:
case 105:
case 1748:
case 3978:
case 2484:
case 1208:
case 3054:
case 4043:
case 2724:
case 326:
case 2664:
case 2053:
case 3723:
case 3256:
case 3483:
case 2224:
case 665:
case 681:
case 1708:
case 1264:
case 2011:
case 3593:
case 75:
case 1624:
case 3173:
case 3961:
case 1418:
case 2384:
case 453:
case 3609:
case 3597:
case 2553:
case 2302:
case 3440:
case 1696:
case 8:
case 3335:
case 1131:
case 2442:
case 3487:
case 2979:
case 3727:
case 2296:
case 1612:
case 1852:
case 403:
case 3435:
case 955:
case 1952:
case 3340:
case 3710:
case 2879:
case 3227:
case 2526:
case 4080:
case 536:
case 2342:
case 3400:
case 3387:
case 4069:
case 2712:
case 3554:
case 1530:
case 3196:
case 734:
case 2110:
case 3833:
case 1677:
case 3457:
case 2493:
case 3631:
case 1505:
case 3042:
case 939:
case 1882:
case 3829:
case 958:
case 1167:
case 721:
case 809:
case 949:
case 2393:
case 730:
case 3357:
case 499:
case 149:
case 3933:
case 3716:
case 1358:
case 870:
case 3346:
case 2964:
case 2103:
case 3522:
case 3815:
case 2948:
case 841:
case 901:
case 2808:
case 2520:
case 4041:
case 1924:
case 1690:
case 4001:
case 2051:
case 2848:
case 3915:
case 1375:
case 3721:
case 1824:
case 3481:
case 110:
case 1137:
case 1458:
case 2908:
case 820:
case 3678:
case 2013:
case 1025:
case 2143:
case 3591:
case 3171:
case 3963:
case 685:
case 3104:
case 831:
case 661:
case 17:
case 2628:
case 3351:
case 97:
case 1559:
case 698:
case 3365:
case 2268:
case 2704:
case 3685:
case 1973:
case 1228:
case 3313:
case 2771:
case 2244:
case 543:
case 1668:
case 2006:
case 406:
case 1728:
case 2046:
case 3465:
case 26:
case 2204:
case 360:
case 3451:
case 3570:
case 1536:
case 3190:
case 1488:
case 2314:
case 2744:
case 533:
case 2572:
case 3413:
case 2192:
case 4039:
case 2768:
case 297:
case 688:
case 1178:
case 2546:
case 2581:
case 3417:
case 3152:
case 2322:
case 3070:
case 1036:
case 3831:
case 1682:
case 3629:
case 4027:
case 1362:
case 373:
case 775:
case 3707:
case 2072:
case 3320:
case 469:
case 1877:
case 4010:
case 2422:
case 2782:
case 3747:
case 1234:
case 3769:
case 585:
case 561:
case 3780:
case 1462:
case 2506:
case 3967:
case 3182:
case 2551:
case 1795:
case 3809:
case 2180:
case 778:
case 1525:
case 3091:
case 728:
case 2370:
case 2695:
case 3849:
case 3514:
case 732:
case 951:
case 3867:
case 3750:
case 213:
case 3372:
case 1938:
case 2107:
case 1295:
case 2679:
case 1979:
case 3319:
case 1296:
case 2612:
case 2638:
case 3209:
case 2131:
case 798:
case 1511:
case 1995:
case 2696:
case 1212:
case 1302:
case 3950:
case 528:
case 1342:
case 1738:
case 1895:
case 309:
case 3419:
case 2952:
case 450:
case 2566:
case 255:
case 532:
case 1879:
case 1094:
case 3709:
case 657:
case 1277:
case 2882:
case 239:
case 795:
case 3907:
case 1493:
case 1040:
case 3880:
case 3:
case 575:
case 1110:
case 1934:
case 1583:
case 1393:
case 3980:
case 2019:
case 3969:
case 1127:
case 2149:
case 1000:
case 1777:
case 2982:
case 1035:
case 785:
case 761:
case 167:
case 4078:
case 2844:
case 1773:
case 1500:
case 876:
case 3943:
case 2868:
case 208:
case 345:
case 19:
case 743:
case 3108:
case 1397:
case 3466:
case 277:
case 3148:
case 916:
case 3686:
case 18:
case 4061:
case 862:
case 632:
case 3366:
case 43:
case 1540:
case 2944:
case 733:
case 1273:
case 2030:
case 212:
case 3843:
case 2871:
case 1083:
case 2804:
case 3305:
case 2208:
case 3821:
case 359:
case 1026:
case 317:
case 3215:
case 2318:
case 4037:
case 205:
case 1594:
case 1376:
case 1174:
case 890:
case 348:
case 3623:
case 2764:
case 1101:
case 1557:
case 2624:
case 4085:
case 894:
case 625:
case 3763:
case 2432:
case 1186:
case 366:
case 2890:
case 880:
case 404:
case 1648:
case 3816:
case 3656:
case 1224:
case 2708:
case 1476:
case 1664:
case 2248:
case 1053:
case 3345:
case 3715:
case 1075:
case 1737:
case 3414:
case 3268:
case 2365:
case 3121:
case 124:
case 2313:
case 1325:
case 3771:
case 491:
case 1941:
case 1986:
case 3704:
case 729:
case 264:
case 36:
case 3204:
case 2637:
case 3271:
case 1841:
case 1058:
case 2243:
case 465:
case 1974:
case 3314:
case 2703:
case 779:
case 1901:
case 120:
case 931:
case 653:
case 1643:
case 599:
case 131:
case 920:
case 174:
case 1425:
case 2381:
case 3103:
case 1839:
case 2716:
case 1621:
case 2346:
case 2014:
case 1261:
case 2792:
case 503:
case 2815:
case 1823:
case 1562:
case 3948:
case 1956:
case 4073:
case 3808:
case 3520:
case 3848:
case 91:
case 2721:
case 2915:
case 1278:
case 468:
case 2292:
case 1088:
case 11:
case 3517:
case 2216:
case 1692:
case 3864:
case 436:
case 1761:
case 3143:
case 2171:
case 3551:
case 2967:
case 689:
case 3565:
case 3017:
case 3513:
case 1498:
case 2809:
case 1650:
case 1927:
case 2909:
case 3752:
case 1336:
case 3370:
case 1910:
case 699:
case 3679:
case 2750:
case 715:
case 2372:
case 2417:
case 3546:
case 1558:
case 3322:
case 1233:
case 1389:
case 2070:
case 2831:
case 2707:
case 3150:
case 702:
case 603:
case 3282:
case 1680:
case 1229:
case 3422:
case 1195:
case 1489:
case 3634:
case 1460:
case 2317:
case 747:
case 2747:
case 1729:
case 1599:
case 1179:
case 2420:
case 163:
case 1607:
case 2931:
case 851:
case 3506:
case 2780:
case 2847:
case 1829:
case 3882:
case 537:
case 3505:
case 1631:
case 1042:
case 1112:
case 2907:
case 1138:
case 1457:
case 2532:
case 339:
case 3677:
case 3109:
case 1833:
case 3530:
case 4095:
case 1576:
case 349:
case 1357:
case 3149:
case 2969:
case 547:
case 1494:
case 358:
case 1002:
case 518:
case 2807:
case 3852:
case 1210:
case 3612:
case 1093:
case 1727:
case 1300:
case 3131:
case 2610:
case 4034:
case 2850:
case 1597:
case 1440:
case 1177:
case 2767:
case 1609:
case 1554:
case 1649:
case 2627:
case 1387:
case 1400:
case 2950:
case 2267:
case 209:
case 355:
case 1227:
case 2249:
case 3952:
case 2709:
case 1667:
case 515:
case 1435:
case 1663:
case 3208:
case 637:
case 2639:
case 259:
case 2821:
case 3318:
case 3332:
case 2215:
case 1978:
case 703:
case 1861:
case 3066:
case 1239:
case 3990:
case 3764:
case 2916:
case 89:
case 248:
case 2623:
case 2763:
case 3432:
case 3418:
case 1593:
case 3624:
case 88:
case 647:
case 2816:
case 2656:
case 1739:
case 266:
case 3264:
case 926:
case 4028:
case 1483:
case 618:
case 2345:
case 1097:
case 3248:
case 2921:
case 1256:
case 2715:
case 962:
case 2892:
case 1084:
case 2803:
case 789:
case 3844:
case 3519:
case 3971:
case 471:
case 434:
case 1786:
case 3868:
case 327:
case 2674:
case 3115:
case 1502:
case 3045:
case 1353:
case 529:
case 2466:
case 440:
case 984:
case 190:
case 1885:
case 1937:
case 377:
case 980:
case 444:
case 3968:
case 1542:
case 180:
case 2018:
case 3673:
case 2032:
case 1124:
case 1326:
case 552:
case 3944:
case 235:
case 1453:
case 1701:
case 430:
case 2164:
case 3030:
case 421:
case 1076:
case 3618:
case 1846:
case 1881:
case 3086:
case 2456:
case 4014:
case 69:
case 978:
case 142:
case 802:
case 178:
case 2577:
case 907:
case 236:
case 1463:
case 928:
case 3875:
case 847:
case 3324:
case 616:
case 3126:
case 1705:
case 128:
case 932:
case 751:
case 2783:
case 3899:
case 3776:
case 2645:
case 268:
case 306:
case 2253:
case 2726:
case 464:
case 1611:
case 1851:
case 1132:
case 3473:
case 2512:
case 1865:
case 1064:
case 2825:
case 1813:
case 2176:
case 2374:
case 2596:
case 2301:
case 3510:
case 2341:
case 1913:
case 2711:
case 925:
case 2386:
case 1266:
case 125:
case 3797:
case 1951:
case 2226:
case 3988:
case 2474:
case 815:
case 2666:
case 265:
case 2294:
case 369:
case 2860:
case 1331:
case 77:
case 3100:
case 567:
case 3027:
case 1694:
case 3523:
case 59:
case 2102:
case 3187:
case 58:
case 3962:
case 1548:
case 1431:
case 2524:
case 2012:
case 2038:
case 1920:
case 3140:
case 1564:
case 3477:
case 72:
case 2257:
case 423:
case 2427:
case 1600:
case 3202:
case 2619:
case 2998:
case 119:
case 2235:
case 3312:
case 1972:
case 3742:
case 1309:
case 701:
case 3396:
case 3194:
case 3501:
case 2740:
case 2936:
case 3438:
case 3157:
case 3412:
case 2836:
case 2240:
case 2410:
case 4022:
case 3496:
case 2735:
case 852:
case 1640:
case 2077:
case 1409:
case 1659:
case 1819:
case 1544:
case 2736:
case 2034:
case 3189:
case 889:
case 501:
case 2162:
case 354:
case 2987:
case 1568:
case 3479:
case 514:
case 3670:
case 510:
case 1272:
case 1636:
case 2759:
case 3395:
case 3029:
case 2298:
case 3902:
case 350:
case 2672:
case 2236:
case 1698:
case 1919:
case 1571:
case 1220:
case 1689:
case 3434:
case 2095:
case 2329:
case 1347:
case 767:
case 57:
case 2289:
case 493:
case 143:
case 2957:
case 1380:
case 3993:
case 803:
case 3893:
case 78:
case 2857:
case 1052:
case 483:
case 1590:
case 3334:
case 1447:
case 933:
case 1217:
case 1480:
case 1307:
case 3762:
case 3578:
case 34:
case 2437:
case 2665:
case 1552:
case 1303:
case 1090:
case 2651:
case 234:
case 3954:
case 271:
case 3288:
case 2926:
case 2613:
case 3078:
case 1625:
case 2853:
case 3428:
case 2595:
case 3614:
case 221:
case 3997:
case 1751:
case 1403:
case 2337:
case 1866:
case 161:
case 2485:
case 185:
case 2199:
case 4032:
case 2725:
case 1713:
case 2911:
case 244:
case 1416:
case 1805:
case 448:
case 1582:
case 472:
case 1321:
case 3775:
case 2646:
case 67:
case 1945:
case 3037:
case 2681:
case 3533:
case 2478:
case 3984:
case 417:
case 459:
case 1246:
case 3799:
case 1830:
case 1281:
case 1206:
case 2534:
case 438:
case 1781:
case 2028:
case 1316:
case 3976:
case 551:
case 188:
case 2455:
case 1905:
case 466:
case 1392:
case 3085:
case 3275:
case 988:
case 2378:
case 3726:
case 2297:
case 2056:
case 206:
case 2473:
case 3538:
case 3486:
case 137:
case 3024:
case 842:
case 1697:
case 878:
case 3176:
case 1914:
case 102:
case 3596:
case 3184:
case 2039:
case 2373:
case 3925:
case 1654:
case 947:
case 1814:
case 1063:
case 807:
case 1567:
case 2797:
case 3753:
case 626:
case 1015:
case 918:
case 2254:
case 365:
case 763:
case 1145:
case 4081:
case 662:
case 832:
case 46:
case 2086:
case 3283:
case 2858:
case 2999:
case 2276:
case 346:
case 3605:
case 1448:
case 3456:
case 1232:
case 3323:
case 690:
case 2975:
case 1676:
case 3197:
case 2153:
case 3356:
case 1348:
case 825:
case 3439:
case 2126:
case 115:
case 2899:
case 3645:
case 1166:
case 3783:
case 915:
case 4051:
case 3427:
case 576:
case 2742:
case 3619:
case 3200:
case 4017:
case 3740:
case 3936:
case 796:
case 2396:
case 2194:
case 413:
case 2586:
case 2157:
case 2541:
case 2438:
case 71:
case 3327:
case 786:
case 3836:
case 1031:
case 3240:
case 2702:
case 3959:
case 562:
case 3287:
case 2242:
case 2539:
case 4072:
case 724:
case 269:
case 3294:
case 3860:
case 3757:
case 1991:
case 2100:
case 2027:
case 1049:
case 819:
case 1563:
case 1822:
case 857:
case 1067:
case 1515:
case 2377:
case 741:
case 2962:
case 580:
case 979:
case 3038:
case 3012:
case 1693:
case 3524:
case 3960:
case 731:
case 952:
case 1922:
case 2010:
case 720:
case 2293:
case 1891:
case 152:
case 3329:
case 1521:
case 2993:
case 790:
case 1791:
case 2561:
case 3333:
case 3289:
case 784:
case 2555:
case 1662:
case 1722:
case 3789:
case 1291:
case 2893:
case 780:
case 3617:
case 1516:
case 3760:
case 3994:
case 2136:
case 2334:
case 999:
case 1050:
case 2198:
case 3433:
case 2578:
case 1592:
case 1770:
case 1503:
case 3940:
case 3736:
case 1352:
case 776:
case 2160:
case 3528:
case 3800:
case 2495:
case 3034:
case 2189:
case 3987:
case 3259:
case 903:
case 3798:
case 254:
case 2802:
case 1007:
case 2479:
case 2585:
case 3298:
case 2029:
case 2395:
case 2670:
case 2842:
case 51:
case 3935:
case 2537:
case 586:
case 35:
case 1452:
case 455:
case 726:
case 2379:
case 1270:
case 3672:
case 3236:
case 1069:
case 762:
case 1151:
case 624:
case 4066:
case 1165:
case 3681:
case 2775:
case 670:
case 405:
case 1818:
case 1832:
case 2125:
case 1580:
case 2533:
case 1569:
case 2876:
case 2799:
case 1043:
case 1003:
case 2299:
case 2758:
case 3534:
case 1390:
case 674:
case 3606:
case 204:
case 2275:
case 1918:
case 1699:
case 1507:
case 1181:
case 24:
case 898:
case 3437:
case 4045:
case 1714:
case 1146:
case 3651:
case 2328:
case 3225:
case 427:
case 1688:
case 408:
case 1368:
case 1550:
case 2954:
case 371:
case 3926:
case 696:
case 2078:
case 2897:
case 2288:
case 3595:
case 2614:
case 412:
case 61:
case 3175:
case 2854:
case 2428:
case 2788:
case 1444:
case 2997:
case 1021:
case 3485:
case 3199:
case 2061:
case 1304:
case 344:
case 4005:
case 563:
case 2055:
case 3725:
case 1371:
case 477:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1746046801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,];
var gg_b = "1746046801/";

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
