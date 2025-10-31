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
case 1690:
case 1414:
case 657:
case 2494:
case 1943:
case 2610:
case 3435:
case 3160:
case 556:
case 3817:
case 2203:
case 2712:
case 74:
case 1792:
case 2391:
case 3748:
case 460:
case 2823:
case 1995:
case 2052:
case 2915:
case 2680:
case 2672:
case 2037:
case 1232:
case 847:
case 1446:
case 1652:
case 2151:
case 1257:
case 1381:
case 3951:
case 1637:
case 3887:
case 2976:
case 3344:
case 3240:
case 3176:
case 1506:
case 1549:
case 452:
case 1302:
case 538:
case 419:
case 121:
case 4013:
case 517:
case 3582:
case 3747:
case 2842:
case 616:
case 3386:
case 128:
case 2278:
case 531:
case 435:
case 1453:
case 273:
case 2473:
case 2766:
case 3316:
case 4083:
case 1922:
case 2221:
case 931:
case 2517:
case 3788:
case 2024:
case 628:
case 52:
case 2420:
case 1369:
case 9:
case 2945:
case 1983:
case 4022:
case 3564:
case 872:
case 2742:
case 13:
case 1341:
case 3718:
case 1136:
case 938:
case 1825:
case 116:
case 2993:
case 3239:
case 3193:
case 1913:
case 1663:
case 3402:
case 3079:
case 2518:
case 3174:
case 1504:
case 708:
case 1598:
case 3787:
case 2974:
case 4095:
case 2882:
case 3309:
case 3542:
case 3481:
case 534:
case 3265:
case 3384:
case 3280:
case 775:
case 4043:
case 1475:
case 3603:
case 701:
case 806:
case 157:
case 310:
case 1892:
case 3210:
case 2764:
case 899:
case 255:
case 1335:
case 2599:
case 769:
case 408:
case 3121:
case 3591:
case 2921:
case 1905:
case 59:
case 247:
case 1488:
case 2733:
case 233:
case 145:
case 1869:
case 571:
case 475:
case 4058:
case 3022:
case 1418:
case 18:
case 2404:
case 2868:
case 2139:
case 1702:
case 67:
case 2301:
case 3939:
case 4079:
case 3744:
case 3056:
case 2370:
case 2274:
case 3095:
case 2071:
case 1781:
case 3846:
case 2231:
case 3809:
case 974:
case 2586:
case 1487:
case 2034:
case 584:
case 4032:
case 2430:
case 3965:
case 2172:
case 1350:
case 3980:
case 1634:
case 1051:
case 2165:
case 2180:
case 282:
case 3884:
case 3348:
case 1596:
case 3775:
case 1711:
case 2312:
case 3762:
case 1392:
case 220:
case 1520:
case 2110:
case 829:
case 1190:
case 1835:
case 3533:
case 3660:
case 3229:
case 1243:
case 453:
case 2553:
case 3714:
case 2364:
case 2260:
case 752:
case 1448:
case 3103:
case 3317:
case 2891:
case 0:
case 360:
case 1029:
case 3492:
case 1507:
case 1295:
case 3784:
case 2977:
case 2449:
case 3450:
case 984:
case 3674:
case 1932:
case 1628:
case 3568:
case 3631:
case 3746:
case 2140:
case 3425:
case 967:
case 1802:
case 191:
case 319:
case 68:
case 352:
case 2584:
case 1163:
case 855:
case 3318:
case 890:
case 1447:
case 206:
case 2546:
case 3013:
case 2768:
case 17:
case 760:
case 1256:
case 3178:
case 581:
case 2514:
case 2978:
case 3645:
case 1594:
case 198:
case 335:
case 99:
case 3399:
case 1627:
case 3816:
case 971:
case 645:
case 3567:
case 1958:
case 3388:
case 3555:
case 2720:
case 3283:
case 842:
case 345:
case 2796:
case 2622:
case 1121:
case 3905:
case 1591:
case 1744:
case 1056:
case 3702:
case 3213:
case 3325:
case 864:
case 1939:
case 2442:
case 2581:
case 2236:
case 38:
case 3841:
case 4040:
case 619:
case 3600:
case 652:
case 1980:
case 3254:
case 1965:
case 3634:
case 1972:
case 2423:
case 1615:
case 3487:
case 2937:
case 3152:
case 1095:
case 2952:
case 887:
case 1846:
case 3835:
case 394:
case 1685:
case 214:
case 2464:
case 660:
case 1814:
case 512:
case 3190:
case 1910:
case 559:
case 1775:
case 2060:
case 1762:
case 3392:
case 2361:
case 1348:
case 2926:
case 3417:
case 3126:
case 1043:
case 2412:
case 160:
case 77:
case 4010:
case 912:
case 3448:
case 1875:
case 3811:
case 809:
case 200:
case 2855:
case 2794:
case 3735:
case 861:
case 2569:
case 1251:
case 1568:
case 3957:
case 4065:
case 1746:
case 4080:
case 1709:
case 2132:
case 2482:
case 3932:
case 1450:
case 868:
case 3507:
case 798:
case 1886:
case 3979:
case 3256:
case 4039:
case 1318:
case 2304:
case 3447:
case 2707:
case 3802:
case 421:
case 525:
case 152:
case 211:
case 1844:
case 1159:
case 2613:
case 366:
case 2389:
case 2466:
case 1388:
case 1567:
case 3627:
case 2045:
case 2319:
case 1753:
case 243:
case 398:
case 2924:
case 135:
case 3311:
case 1375:
case 3626:
case 2897:
case 2761:
case 1362:
case 2355:
case 826:
case 1435:
case 153:
case 562:
case 3943:
case 610:
case 3409:
case 3065:
case 3637:
case 3381:
case 1887:
case 3232:
case 3446:
case 3652:
case 2830:
case 242:
case 3484:
case 2706:
case 3750:
case 1115:
case 1501:
case 2749:
case 2195:
case 913:
case 3956:
case 2156:
case 2804:
case 3100:
case 1818:
case 550:
case 14:
case 3039:
case 669:
case 1582:
case 2900:
case 3549:
case 1240:
case 814:
case 3506:
case 1888:
case 3922:
case 287:
case 2592:
case 941:
case 2605:
case 50:
case 3453:
case 2819:
case 608:
case 2224:
case 2320:
case 185:
case 1469:
case 1005:
case 2021:
case 1564:
case 1058:
case 445:
case 3369:
case 1678:
case 85:
case 685:
case 3205:
case 2373:
case 3127:
case 2078:
case 1788:
case 108:
case 277:
case 3663:
case 724:
case 169:
case 800:
case 950:
case 3825:
case 2113:
case 1523:
case 3444:
case 296:
case 3913:
case 1193:
case 2936:
case 101:
case 1718:
case 3136:
case 2798:
case 757:
case 995:
case 33:
case 48:
case 3040:
case 2059:
case 2154:
case 2849:
case 1265:
case 3954:
case 2806:
case 1309:
case 1131:
case 2657:
case 3128:
case 3504:
case 3598:
case 2928:
case 3335:
case 604:
case 811:
case 2003:
case 1717:
case 3892:
case 357:
case 653:
case 73:
case 1848:
case 2491:
case 962:
case 3655:
case 334:
case 484:
case 3235:
case 2294:
case 2091:
case 3062:
case 4017:
case 2208:
case 2192:
case 1948:
case 2326:
case 2403:
case 72:
case 1691:
case 3950:
case 1365:
case 4087:
case 2949:
case 2150:
case 1372:
case 1081:
case 904:
case 854:
case 3106:
case 1576:
case 2734:
case 2556:
case 1209:
case 2681:
case 2337:
case 1457:
case 803:
case 827:
case 1182:
case 510:
case 2828:
case 1432:
case 3500:
case 2352:
case 734:
case 2602:
case 141:
case 249:
case 2595:
case 2125:
case 3571:
case 3440:
case 2207:
case 3813:
case 1002:
case 1479:
case 508:
case 985:
case 49:
case 32:
case 3241:
case 3883:
case 4088:
case 1560:
case 478:
case 1633:
case 1253:
case 3620:
case 650:
case 113:
case 2543:
case 2478:
case 2338:
case 501:
case 3305:
case 3722:
case 2827:
case 613:
case 54:
case 3053:
case 150:
case 317:
case 648:
case 297:
case 2296:
case 2421:
case 969:
case 1069:
case 3119:
case 901:
case 851:
case 488:
case 195:
case 2324:
case 338:
case 2669:
case 2220:
case 3856:
case 1668:
case 1531:
case 2904:
case 2736:
case 641:
case 2641:
case 26:
case 1918:
case 3104:
case 3528:
case 975:
case 2363:
case 331:
case 276:
case 858:
case 585:
case 3713:
case 3202:
case 2554:
case 10:
case 3189:
case 3607:
case 2989:
case 1340:
case 1244:
case 717:
case 1851:
case 202:
case 1987:
case 3357:
case 504:
case 3480:
case 3472:
case 2834:
case 1123:
case 3754:
case 356:
case 3046:
case 738:
case 1667:
case 3014:
case 2997:
case 3211:
case 2583:
case 836:
case 3608:
case 1729:
case 474:
case 3705:
case 4053:
case 417:
case 3526:
case 2738:
case 1916:
case 203:
case 1299:
case 254:
case 2219:
case 1133:
case 438:
case 125:
case 3590:
case 552:
case 2445:
case 2824:
case 3120:
case 3537:
case 2298:
case 1025:
case 2001:
case 1218:
case 2300:
case 3902:
case 2863:
case 2102:
case 3047:
case 1944:
case 774:
case 2625:
case 1840:
case 1287:
case 1050:
case 4084:
case 2752:
case 612:
case 1682:
case 659:
case 3649:
case 2230:
case 2334:
case 1454:
case 456:
case 4046:
case 3606:
case 2082:
case 2726:
case 240:
case 3661:
case 3911:
case 1975:
case 1191:
case 1521:
case 4014:
case 1962:
case 1217:
case 2790:
case 2012:
case 781:
case 2955:
case 374:
case 3343:
case 849:
case 3935:
case 2485:
case 2135:
case 1664:
case 1329:
case 1914:
case 4062:
case 3017:
case 771:
case 258:
case 3108:
case 1578:
case 86:
case 2558:
case 2826:
case 79:
case 1248:
case 3697:
case 1865:
case 251:
case 778:
case 159:
case 3250:
case 1872:
case 1623:
case 2415:
case 1559:
case 1909:
case 2837:
case 2579:
case 3732:
case 767:
case 1946:
case 2328:
case 2042:
case 4086:
case 3313:
case 1577:
case 3225:
case 1456:
case 2336:
case 2557:
case 39:
case 3941:
case 42:
case 21:
case 2141:
case 3698:
case 3383:
case 378:
case 2169:
case 367:
case 1422:
case 2838:
case 2973:
case 919:
case 3173:
case 2327:
case 952:
case 3805:
case 822:
case 591:
case 325:
case 363:
case 2878:
case 188:
case 2933:
case 3483:
case 3133:
case 605:
case 2116:
case 1526:
case 2427:
case 1047:
case 3601:
case 3840:
case 2144:
case 4041:
case 246:
case 2859:
case 2565:
case 1902:
case 2580:
case 69:
case 3739:
case 289:
case 2572:
case 598:
case 880:
case 1552:
case 3986:
case 1356:
case 2436:
case 1537:
case 1879:
case 945:
case 2186:
case 2242:
case 1395:
case 725:
case 3765:
case 2315:
case 2877:
case 3772:
case 3454:
case 893:
case 3670:
case 3682:
case 2428:
case 2006:
case 1832:
case 3050:
case 3351:
case 174:
case 1343:
case 2264:
case 2385:
case 2360:
case 3710:
case 2061:
case 1155:
case 2648:
case 2162:
case 1911:
case 2991:
case 3962:
case 3521:
case 3217:
case 1661:
case 1538:
case 2617:
case 3248:
case 1697:
case 3167:
case 674:
case 2212:
case 1194:
case 3914:
case 3443:
case 2097:
case 1108:
case 3578:
case 839:
case 1935:
case 184:
case 1757:
case 2270:
case 2374:
case 3946:
case 2030:
case 3909:
case 2687:
case 1732:
case 1451:
case 3623:
case 2540:
case 312:
case 4081:
case 3865:
case 3984:
case 292:
case 19:
case 2618:
case 681:
case 1698:
case 2089:
case 3247:
case 2400:
case 3168:
case 2393:
case 2004:
case 171:
case 1018:
case 1313:
case 1107:
case 2098:
case 1689:
case 2201:
case 3740:
case 441:
case 545:
case 105:
case 1805:
case 1758:
case 58:
case 966:
case 3422:
case 2688:
case 1099:
case 223:
case 97:
case 265:
case 1969:
case 1619:
case 712:
case 3953:
case 2778:
case 178:
case 207:
case 2675:
case 3948:
case 2662:
case 2148:
case 3691:
case 1161:
case 280:
case 2267:
case 2055:
case 3112:
case 2760:
case 889:
case 3214:
case 134:
case 3829:
case 1235:
case 1743:
case 846:
case 3246:
case 2970:
case 3432:
case 557:
case 3170:
case 2982:
case 656:
case 1106:
case 748:
case 3284:
case 1795:
case 459:
case 3372:
case 1854:
case 1149:
case 2715:
case 631:
case 1044:
case 1756:
case 2147:
case 12:
case 3002:
case 2686:
case 3479:
case 2901:
case 1925:
case 6:
case 3101:
case 1571:
case 3339:
case 2776:
case 1086:
case 341:
case 1534:
case 1696:
case 2020:
case 1305:
case 53:
case 3458:
case 638:
case 1269:
case 1620:
case 2096:
case 313:
case 348:
case 2424:
case 2845:
case 516:
case 3585:
case 2073:
case 215:
case 138:
case 892:
case 521:
case 425:
case 2745:
case 2529:
case 3216:
case 3069:
case 350:
case 1053:
case 3988:
case 30:
case 2359:
case 1439:
case 744:
case 131:
case 62:
case 830:
case 1104:
case 2942:
case 1856:
case 3668:
case 3531:
case 3142:
case 1:
case 3593:
case 2923:
case 1895:
case 3123:
case 2815:
case 156:
case 957:
case 807:
case 1465:
case 823:
case 362:
case 1332:
case 2646:
case 2731:
case 2609:
case 750:
case 1536:
case 2437:
case 4050:
case 3851:
case 2774:
case 1084:
case 1843:
case 1694:
case 3164:
case 879:
case 3917:
case 2426:
case 3262:
case 2303:
case 2094:
case 2117:
case 3035:
case 3667:
case 1581:
case 720:
case 3868:
case 1236:
case 804:
case 2347:
case 853:
case 2056:
case 2939:
case 3489:
case 126:
case 347:
case 51:
case 1938:
case 3366:
case 618:
case 1796:
case 3575:
case 536:
case 2022:
case 3419:
case 3245:
case 483:
case 2762:
case 3791:
case 3867:
case 1361:
case 2775:
case 3312:
case 3516:
case 3497:
case 1926:
case 2348:
case 600:
case 2533:
case 2660:
case 2229:
case 1894:
case 3110:
case 2814:
case 1990:
case 1755:
case 1808:
case 1937:
case 3034:
case 3651:
case 3231:
case 3071:
case 3274:
case 1228:
case 2095:
case 382:
case 2972:
case 65:
case 1349:
case 2965:
case 1502:
case 2980:
case 3172:
case 2615:
case 1306:
case 733:
case 940:
case 1423:
case 1031:
case 3449:
case 1330:
case 4037:
case 3028:
case 1271:
case 2177:
case 3323:
case 2387:
case 2054:
case 808:
case 2674:
case 1482:
case 1470:
case 15:
case 540:
case 1794:
case 3285:
case 3364:
case 799:
case 2714:
case 1855:
case 1569:
case 869:
case 3461:
case 2492:
case 260:
case 2862:
case 3891:
case 1397:
case 706:
case 2875:
case 2317:
case 91:
case 3833:
case 1319:
case 1535:
case 143:
case 772:
case 3027:
case 1924:
case 2753:
case 3514:
case 1820:
case 936:
case 2083:
case 1466:
case 399:
case 1707:
case 219:
case 1963:
case 2940:
case 3959:
case 1389:
case 2844:
case 2693:
case 3140:
case 554:
case 1401:
case 503:
case 1179:
case 626:
case 306:
case 2013:
case 3768:
case 2318:
case 527:
case 1304:
case 1093:
case 3672:
case 773:
case 3680:
case 3665:
case 3052:
case 1971:
case 4028:
case 1749:
case 472:
case 3151:
case 3547:
case 3864:
case 2160:
case 1355:
case 3985:
case 3960:
case 164:
case 253:
case 3494:
case 1143:
case 204:
case 2566:
case 2748:
case 1897:
case 3391:
case 3090:
case 3203:
case 3712:
case 2375:
case 677:
case 373:
case 3333:
case 1819:
case 2469:
case 576:
case 2005:
case 1320:
case 4027:
case 3278:
case 2888:
case 668:
case 1592:
case 986:
case 187:
case 2316:
case 1396:
case 3548:
case 3473:
case 1263:
case 3701:
case 329:
case 1550:
case 1889:
case 609:
case 3639:
case 3259:
case 2344:
case 3407:
case 2240:
case 696:
case 2747:
case 2386:
case 1900:
case 2582:
case 1898:
case 406:
case 24:
case 2818:
case 3368:
case 201:
case 1059:
case 2847:
case 1789:
case 2402:
case 997:
case 3801:
case 3993:
case 1307:
case 2523:
case 1238:
case 976:
case 1927:
case 3496:
case 3517:
case 1183:
case 275:
case 2058:
case 383:
case 2678:
case 3420:
case 433:
case 2145:
case 1797:
case 210:
case 1861:
case 3812:
case 420:
case 2603:
case 1491:
case 1226:
case 664:
case 3129:
case 3764:
case 852:
case 355:
case 1290:
case 1308:
case 2314:
case 2481:
case 1657:
case 1237:
case 1928:
case 1632:
case 1077:
case 2787:
case 3882:
case 3518:
case 4071:
case 1252:
case 2174:
case 332:
case 2265:
case 2057:
case 835:
case 1154:
case 3723:
case 2272:
case 1849:
case 2677:
case 2032:
case 2446:
case 2652:
case 632:
case 1547:
case 2637:
case 787:
case 1782:
case 2409:
case 570:
case 1151:
case 2080:
case 1052:
case 2171:
case 4074:
case 3749:
case 2995:
case 1672:
case 2484:
case 1037:
case 845:
case 4031:
case 2134:
case 2010:
case 3897:
case 1203:
case 2626:
case 2311:
case 922:
case 3467:
case 1610:
case 1494:
case 1026:
case 2414:
case 3143:
case 690:
case 1864:
case 400:
case 1960:
case 1985:
case 3605:
case 1548:
case 3396:
case 1766:
case 4045:
case 1473:
case 683:
case 2922:
case 2638:
case 3592:
case 2561:
case 2258:
case 437:
case 418:
case 3021:
case 443:
case 1278:
case 742:
case 2453:
case 1333:
case 3819:
case 2039:
case 3900:
case 4093:
case 3898:
case 2100:
case 3156:
case 2279:
case 3889:
case 1639:
case 894:
case 1259:
case 3263:
case 2725:
case 1701:
case 515:
case 411:
case 129:
case 396:
case 2913:
case 1640:
case 216:
case 2825:
case 1801:
case 2444:
case 2663:
case 361:
case 4076:
case 2040:
case 629:
case 23:
case 1368:
case 309:
case 1587:
case 3798:
case 3704:
case 2486:
case 1063:
case 368:
case 2624:
case 2369:
case 3183:
case 2983:
case 3433:
case 3078:
case 939:
case 2597:
case 3373:
case 1517:
case 3238:
case 3290:
case 796:
case 3394:
case 891:
case 1599:
case 224:
case 866:
case 2519:
case 1129:
case 1455:
case 761:
case 2335:
case 3226:
case 3491:
case 3861:
case 4060:
case 3797:
case 257:
case 1588:
case 190:
case 1812:
case 768:
case 2589:
case 2954:
case 898:
case 1723:
case 2850:
case 970:
case 3632:
case 777:
case 3928:
case 3077:
case 1518:
case 1870:
case 3657:
case 3237:
case 1293:
case 507:
case 496:
case 2702:
case 3807:
case 2325:
case 326:
case 565:
case 606:
case 699:
case 2600:
case 3076:
case 1404:
case 3236:
case 3656:
case 409:
case 1245:
case 1733:
case 468:
case 2283:
case 1419:
case 2555:
case 1921:
case 1562:
case 3227:
case 4078:
case 3105:
case 946:
case 2138:
case 3894:
case 592:
case 2520:
case 3808:
case 3755:
case 314:
case 294:
case 2126:
case 1497:
case 2596:
case 3926:
case 2417:
case 1867:
case 3361:
case 2392:
case 2711:
case 3060:
case 3695:
case 1544:
case 2634:
case 1180:
case 1430:
case 3349:
case 1172:
case 3952:
case 2781:
case 3015:
case 2152:
case 530:
case 672:
case 2487:
case 1651:
case 2932:
case 3132:
case 3541:
case 2881:
case 3157:
case 1028:
case 2295:
case 1977:
case 172:
case 743:
case 2507:
case 3654:
case 3031:
case 3330:
case 992:
case 1903:
case 2811:
case 1461:
case 3412:
case 83:
case 620:
case 2735:
case 711:
case 1364:
case 1553:
case 3855:
case 3045:
case 75:
case 3896:
case 633:
case 979:
case 2222:
case 3773:
case 487:
case 343:
case 589:
case 1978:
case 298:
case 2594:
case 647:
case 2508:
case 3820:
case 546:
case 2769:
case 3319:
case 1546:
case 857:
case 106:
case 907:
case 3304:
case 3200:
case 2447:
case 2256:
case 2979:
case 965:
case 2741:
case 2636:
case 1959:
case 1140:
case 1584:
case 2163:
case 3707:
case 1036:
case 2802:
case 3963:
case 3204:
case 3001:
case 1647:
case 2537:
case 2356:
case 740:
case 1859:
case 2047:
case 3493:
case 3625:
case 1376:
case 476:
case 1580:
case 281:
case 2902:
case 1565:
case 4068:
case 607:
case 2196:
case 3996:
case 2526:
case 506:
case 2858:
case 1878:
case 3824:
case 1510:
case 2590:
case 3219:
case 1933:
case 354:
case 3066:
case 3505:
case 3111:
case 1175:
case 982:
case 1803:
case 1162:
case 1648:
case 3297:
case 2538:
case 82:
case 340:
case 274:
case 1061:
case 3012:
case 1264:
case 1385:
case 2832:
case 2857:
case 3752:
case 2981:
case 727:
case 3181:
case 2606:
case 3371:
case 1315:
case 920:
case 1223:
case 3070:
case 3334:
case 2649:
case 754:
case 3415:
case 1540:
case 3206:
case 838:
case 3249:
case 1434:
case 1777:
case 2250:
case 192:
case 1374:
case 1270:
case 2757:
case 3328:
case 1282:
case 3023:
case 1687:
case 1331:
case 3837:
case 3579:
case 2451:
case 2732:
case 1030:
case 358:
case 736:
case 582:
case 4091:
case 3890:
case 3908:
case 2935:
case 284:
case 71:
case 3064:
case 3558:
case 1967:
case 1703:
case 130:
case 2292:
case 1345:
case 2969:
case 165:
case 123:
case 3169:
case 1699:
case 856:
case 278:
case 3724:
case 751:
case 3327:
case 2173:
case 205:
case 2758:
case 3973:
case 4033:
case 3838:
case 2099:
case 2107:
case 1098:
case 3907:
case 486:
case 1004:
case 2018:
case 3763:
case 3476:
case 3042:
case 1089:
case 547:
case 2779:
case 3532:
case 2698:
case 31:
case 1400:
case 689:
case 1618:
case 646:
case 3557:
case 3336:
case 3906:
case 2106:
case 2854:
case 451:
case 888:
case 2950:
case 122:
case 4023:
case 3352:
case 1982:
case 1874:
case 2500:
case 1970:
case 3681:
case 3337:
case 3091:
case 881:
case 458:
case 1785:
case 2075:
case 3390:
case 749:
case 2743:
case 2235:
case 670:
case 3403:
case 1662:
case 3611:
case 3326:
case 3522:
case 3961:
case 2992:
case 1912:
case 1055:
case 1267:
case 1424:
case 3543:
case 1845:
case 2016:
case 3478:
case 2620:
case 1096:
case 3827:
case 3338:
case 3125:
case 3595:
case 1893:
case 1644:
case 2534:
case 349:
case 583:
case 874:
case 1463:
case 2086:
case 1776:
case 3602:
case 639:
case 1147:
case 22:
case 3700:
case 3836:
case 4001:
case 2528:
case 1118:
case 3904:
case 1007:
case 2198:
case 3641:
case 2379:
case 1942:
case 2856:
case 3989:
case 573:
case 139:
case 2713:
case 2202:
case 3068:
case 3554:
case 3363:
case 231:
case 1793:
case 3421:
case 3296:
case 693:
case 702:
case 3727:
case 1438:
case 397:
case 2053:
case 3669:
case 238:
case 1378:
case 115:
case 2783:
case 1529:
case 1745:
case 1233:
case 1199:
case 1117:
case 3997:
case 2211:
case 2197:
case 170:
case 2014:
case 1008:
case 440:
case 2843:
case 2608:
case 1614:
case 3067:
case 4012:
case 3635:
case 867:
case 1646:
case 1731:
case 797:
case 3728:
case 1774:
case 2357:
case 1609:
case 2281:
case 256:
case 2046:
case 1815:
case 4082:
case 2895:
case 2130:
case 2480:
case 2465:
case 1681:
case 2457:
case 3831:
case 1556:
case 1828:
case 3874:
case 964:
case 2182:
case 2365:
case 2284:
case 2380:
case 1949:
case 492:
case 793:
case 1477:
case 1734:
case 2576:
case 1522:
case 2112:
case 430:
case 1192:
case 3912:
case 3267:
case 3055:
case 2691:
case 3148:
case 942:
case 3662:
case 3675:
case 1208:
case 2310:
case 2011:
case 3760:
case 1294:
case 2458:
case 4019:
case 1033:
case 3966:
case 509:
case 3321:
case 1827:
case 1273:
case 2585:
case 722:
case 407:
case 1543:
case 248:
case 3424:
case 423:
case 3845:
case 393:
case 561:
case 465:
case 1700:
case 3551:
case 577:
case 1836:
case 3268:
case 780:
case 3686:
case 4089:
case 568:
case 3463:
case 241:
case 1459:
case 186:
case 987:
case 2515:
case 2101:
case 1125:
case 2339:
case 1207:
case 479:
case 3901:
case 3644:
case 176:
case 1068:
case 339:
case 1363:
case 489:
case 2340:
case 20:
case 2142:
case 2668:
case 686:
case 2286:
case 968:
case 1800:
case 2574:
case 649:
case 587:
case 1998:
case 3007:
case 1736:
case 16:
case 3529:
case 3653:
case 1919:
case 295:
case 859:
case 909:
case 812:
case 2988:
case 3438:
case 250:
case 2069:
case 2216:
case 3964:
case 1067:
case 2164:
case 3885:
case 4061:
case 1583:
case 244:
case 2545:
case 542:
case 2729:
case 3614:
case 3490:
case 2035:
case 3094:
case 2275:
case 370:
case 3291:
case 3426:
case 262:
case 3684:
case 1834:
case 3377:
case 1513:
case 2123:
case 1871:
case 3815:
case 2987:
case 4049:
case 3187:
case 3646:
case 4006:
case 543:
case 2739:
case 61:
case 3144:
case 2413:
case 1493:
case 1625:
case 1289:
case 3376:
case 636:
case 1001:
case 3647:
case 1219:
case 3933:
case 2299:
case 154:
case 1445:
case 4073:
case 511:
case 3878:
case 1824:
case 225:
case 3721:
case 127:
case 926:
case 2666:
case 2288:
case 3116:
case 1996:
case 2710:
case 789:
case 1955:
case 3385:
case 1692:
case 658:
case 1726:
case 2612:
case 140:
case 470:
case 3991:
case 2521:
case 3175:
case 2217:
case 3648:
case 2191:
case 1297:
case 848:
case 1650:
case 813:
case 3315:
case 1371:
case 3877:
case 3539:
case 3223:
case 2772:
case 2765:
case 1070:
case 1752:
case 1431:
case 2351:
case 1474:
case 1737:
case 3006:
case 651:
case 2670:
case 3687:
case 1579:
case 3030:
case 3270:
case 1852:
case 3374:
case 1023:
case 850:
case 900:
case 3146:
case 3434:
case 707:
case 422:
case 392:
case 2872:
case 259:
case 212:
case 2880:
case 151:
case 2865:
case 514:
case 2559:
case 3471:
case 1415:
case 765:
case 3540:
case 1206:
case 723:
case 3967:
case 1064:
case 4055:
case 3212:
case 1261:
case 2248:
case 1826:
case 3617:
case 2664:
case 1485:
case 3097:
case 158:
case 2810:
case 3114:
case 779:
case 2914:
case 3266:
case 2422:
case 3019:
case 603:
case 3778:
case 3699:
case 792:
case 3153:
case 2953:
case 526:
case 3345:
case 323:
case 493:
case 918:
case 2456:
case 730:
case 2168:
case 2642:
case 1532:
case 3089:
case 2247:
case 2740:
case 3759:
case 1042:
case 379:
case 2839:
case 3201:
case 3004:
case 1476:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1761883201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,];
var gg_b = "1761883201/";

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
